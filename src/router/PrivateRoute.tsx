import React from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Loader from '@/components/loader'; // Ensure the path is correct

interface PrivateRouteProps {
  element: React.LazyExoticComponent<React.FC> | React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element }) => {
  const [authenticated, setAuthenticated] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthenticated(!!session);
    };

    checkAuth();
  }, []);

  if (authenticated === null) {
    return <Loader />;
  }

  return authenticated ? <Element /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
