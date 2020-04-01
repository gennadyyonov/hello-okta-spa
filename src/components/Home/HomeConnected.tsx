import {pingThunk} from 'actions/pingThunk';
import {connect} from 'react-redux';
import {AppState} from 'reducers/root';
import {compose} from 'redux';
import Home from './Home';

interface MapStateToProps {
  message: string;
}

interface MapDispatchToProps {
  doPing(): void;
}

export interface HomeProps {
  message: string;
  onPing(): void;
}

const mapStateToProps = ({message}): MapStateToProps => ({message});

const mapDispatchToProps = { doPing: pingThunk };

const mergeProps = ({message}: MapStateToProps, {doPing}: MapDispatchToProps): HomeProps => {
  return {message, onPing: () => doPing()}
};

export const HomeConnected = compose(
  connect<MapStateToProps, MapDispatchToProps, {}, HomeProps, AppState>(mapStateToProps, mapDispatchToProps, mergeProps)
)(Home);
