import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppState, Langs, TranslationState} from '../reducers';
import {AppContainer} from './AppContainer';

export interface AppContainerProps {
  locale: string;
  messages: Langs;
}

interface MapStateToProps extends Pick<TranslationState, 'locale' | 'entries'> {
}

const mapStateToProps = (state) => {
  const {
    translation: {
      locale,
      entries,
    }
  } = state;
  return {locale, entries};
};

const mergeProps = ({locale, entries}: MapStateToProps): AppContainerProps => ({
  locale,
  messages: entries,
});

export const AppContainerConnected = compose(
  connect<MapStateToProps, {}, {}, AppContainerProps, AppState>(mapStateToProps, null, mergeProps)
)(AppContainer);