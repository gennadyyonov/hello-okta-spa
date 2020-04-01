import {pingThunk} from 'actions/pingThunk';
import {connect} from 'react-redux';
import {MessageState} from 'reducers/message';
import {AppState} from 'reducers/root';
import {compose} from 'redux';
import Home from './Home';

interface MapStateToProps extends Pick<MessageState, 'text'>, Pick<AppState, 'ping'> {
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
    },
    ping
  } = state;
  return {text, ping};
};

const mapDispatchToProps = {doPing: pingThunk};

const mergeProps = ({text, ping}: MapStateToProps, {doPing}: MapDispatchToProps): HomeProps => {
  return {message: ping ? ping : text, onPing: () => doPing()}
};

export const HomeConnected = compose(
  connect<MapStateToProps, MapDispatchToProps, {}, HomeProps, AppState>(mapStateToProps, mapDispatchToProps, mergeProps)
)(Home);
