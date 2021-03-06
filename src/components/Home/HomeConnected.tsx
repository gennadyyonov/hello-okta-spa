import {pingThunk} from 'actions/pingThunk';
import {connect} from 'react-redux';
import {AppState} from 'reducers';
import {MessageState} from 'reducers/message';
import {compose} from 'redux';
import Home from './Home';

interface MapStateToProps extends Pick<MessageState, 'text'> {
}

interface MapDispatchToProps {
  doPing(): void;
}

export interface HomeProps {
  message?: string | null;
  onPing(): void;
}

const mapStateToProps = (state) => {
  const {
    message: {
      text,
    }
  } = state;
  return {text};
};

const mapDispatchToProps = {doPing: pingThunk};

const mergeProps = ({text}: MapStateToProps, {doPing}: MapDispatchToProps): HomeProps => {
  return {message: text, onPing: () => doPing()}
};

export const HomeConnected = compose(
  connect<MapStateToProps, MapDispatchToProps, {}, HomeProps, AppState>(mapStateToProps, mapDispatchToProps, mergeProps)
)(Home);
