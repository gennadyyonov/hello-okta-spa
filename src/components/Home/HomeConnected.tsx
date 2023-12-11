import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '../../App/store';
import { MessageState } from '../../features/message';
import { pingThunk } from '../../features/message/messageSlice';
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
  return { text };
};

const mapDispatchToProps = { doPing: pingThunk };

const mergeProps = ({ text }: MapStateToProps, { doPing }: MapDispatchToProps): HomeProps => {
  return { message: text, onPing: () => doPing() }
};

export const HomeConnected = compose(
  connect<MapStateToProps, MapDispatchToProps, object, HomeProps, RootState>(mapStateToProps, mapDispatchToProps, mergeProps)
)(Home);
