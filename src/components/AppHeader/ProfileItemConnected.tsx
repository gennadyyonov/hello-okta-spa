import {connect} from 'react-redux';
import {compose} from 'redux';
import {ProfileItem} from './ProfileItem';
import {AppState, UserInfoProps} from '../../reducers';

interface MapStateToProps extends Pick<UserInfoProps, 'userId' | 'firstName' | 'lastName'> {
}

export interface ProfileItemProps extends UserInfoProps {
}

const mapStateToProps = (state) => {
  const {
    userInfo: {
      userId,
      firstName,
      lastName,
    }
  } = state;
  return {userId, firstName, lastName};
};

const mergeProps = ({userId, firstName, lastName}: MapStateToProps): ProfileItemProps => ({userId, firstName, lastName});

export const ProfileItemConnected = compose(
  connect<MapStateToProps, {}, {}, ProfileItemProps, AppState>(mapStateToProps, null, mergeProps)
)(ProfileItem);
