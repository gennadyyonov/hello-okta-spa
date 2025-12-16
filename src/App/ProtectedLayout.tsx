import { AppLayout } from '../components/AppLayout/AppLayout';
import { withAuth } from './withAuth';

export const ProtectedLayout = withAuth(AppLayout);
