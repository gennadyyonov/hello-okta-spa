import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppState} from 'reducers/root';
import {UserInfoState} from 'reducers/userInfo';
import {ProfileItem} from './ProfileItem';

interface MapStateToProps extends Pick<UserInfoState, 'userId' | 'firstName' | 'lastName'> {
}

export interface ProfileItemProps {
  userId?: string;
  firstName?: string;
  lastName?: string;
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

const mergeProps = ({userId, firstName, lastName}: MapStateToProps): ProfileItemProps => ({
  userId,
  firstName,
  lastName
});

export const ProfileItemConnected = compose(
  connect<MapStateToProps, {}, {}, ProfileItemProps, AppState>(mapStateToProps, null, mergeProps)
)(ProfileItem);
