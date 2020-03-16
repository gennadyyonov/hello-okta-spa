import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppState, TranslationState} from '../../reducers';
import {AppHeader} from './AppHeader';

interface MapStateToProps extends Pick<TranslationState, 'initialized'> {
}

export interface AppHeaderProps {
  translationsInitialized: boolean;
}

const mapStateToProps = (state) => {
  const {
    translation: {
      initialized,
    }
  } = state;
  return {initialized};
};

const mergeProps = ({initialized}: MapStateToProps): AppHeaderProps => ({
  translationsInitialized: initialized
});

export const AppHeaderConnected = compose(
  connect<MapStateToProps, {}, {}, AppHeaderProps, AppState>(mapStateToProps, null, mergeProps)
)(AppHeader);
