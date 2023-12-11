import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '../../App/store';
import { UserInfoState } from '../../features/userInfo';
import { ProfileItem } from './ProfileItem';

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
  return { userId, firstName, lastName };
};

const mergeProps = ({ userId, firstName, lastName }: MapStateToProps): ProfileItemProps => ({
  userId,
  firstName,
  lastName
});

export const ProfileItemConnected = compose(
  connect<MapStateToProps, object, object, ProfileItemProps, RootState>(mapStateToProps, null, mergeProps)
)(ProfileItem);
