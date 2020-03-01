import {Home} from 'components/Home/Home';
import {connect} from 'react-redux';
import {AppState, HomeProps} from 'reducers/index';
import {compose} from 'redux';

interface MapStateToProps extends HomeProps {
}

export const HomeConnected = compose(
  connect<MapStateToProps, {}, {}, HomeProps, AppState>(
    ({message}): MapStateToProps => ({message}),
    null,
    ({message}): HomeProps => ({message})
  )
)(Home);
