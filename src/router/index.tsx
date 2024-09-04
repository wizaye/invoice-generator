import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import GeneralError from '../pages/errors/general-error';
import NotFoundError from '../pages/errors/not-found-error';
import MaintenanceError from '../pages/errors/maintenance-error';
import UnauthorisedError from '../pages/errors/unauthorised-error';
import Loader from '@/components/loader'; // Ensure the path is correct
import PrivateRoute from './PrivateRoute'; // Ensure the path is correct

const SignIn = React.lazy(() => import('../pages/auth/sign-in'));
const SignUp = React.lazy(() => import('../pages/auth/sign-up'));
const ForgotPassword = React.lazy(() => import('../pages/auth/forgot-password'));
const Otp = React.lazy(() => import('../pages/auth/otp'));
const AppShell = React.lazy(() => import('../components/app-shell'));
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Billing = React.lazy(() => import('@/pages/billing'));
const ComingSoon = React.lazy(() => import('@/components/coming-soon'));
const Invoice= React.lazy(() => import('@/pages/invoice'));
const Inventory = React.lazy(() => import('@/pages/inventory'));

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/sign-in',
    element: (
      <React.Suspense fallback={<Loader />}>
        <SignIn />
      </React.Suspense>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <React.Suspense fallback={<Loader />}>
        <SignUp />
      </React.Suspense>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <React.Suspense fallback={<Loader />}>
        <ForgotPassword />
      </React.Suspense>
    ),
  },
  {
    path: '/otp',
    element: (
      <React.Suspense fallback={<Loader />}>
        <Otp />
      </React.Suspense>
    ),
  },

  // Main routes
  {
    path: '/',
    element: (
      <React.Suspense fallback={<Loader />}>
        <AppShell />
      </React.Suspense>
    ),
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        element: <PrivateRoute element={Dashboard} />,
      },
      {
        path: 'billing',
        element: <PrivateRoute element={Billing} />,
      },
      {
        path: 'create-invoice',
        element: <PrivateRoute element={Invoice} />,
      },
      {
        path: 'inventory',
        element: <PrivateRoute element={Inventory} />,
      },
      {
        path: 'users',
        element: <PrivateRoute element={ComingSoon} />,
      },
      {
        path: 'analysis',
        element: <PrivateRoute element={ComingSoon} />,
      },
    ],
  },

  // Error routes
  { path: '/500', element: <GeneralError /> },
  { path: '/404', element: <NotFoundError /> },
  { path: '/503', element: <MaintenanceError /> },
  { path: '/401', element: <UnauthorisedError /> },

  // Fallback 404 route
  { path: '*', element: <NotFoundError /> },
]);

export default router;
