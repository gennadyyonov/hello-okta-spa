import Home from 'components/Home/Home';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {pingThunk} from '../../actions/pingThunk';
import {AppState} from '../../reducers';

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
