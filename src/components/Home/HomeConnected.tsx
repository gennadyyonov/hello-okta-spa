import {Home} from 'components/Home/Home';
import {connect} from 'react-redux';
import {AppState, HomeProps} from 'reducers/index';
import {compose} from 'redux';

interface MapStateToProps extends HomeProps {
}

const mapStateToProps = ({message}): MapStateToProps => ({message});

const mergeProps = ({message}: MapStateToProps): HomeProps => ({message});

export const HomeConnected = compose(
  connect<MapStateToProps, {}, {}, HomeProps, AppState>(mapStateToProps, null, mergeProps)
)(Home);
