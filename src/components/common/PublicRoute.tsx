import * as React from 'react';
import { Navigate } from 'react-router-dom';
// import { useStoreSelector } from 'hooks/common';
// import { ROUTES } from 'navigation/routes';
// import { selectAllAuthState } from 'store/slices/auth';

export function PublicRoute({ children }: { children: JSX.Element }) {
  // const { isAuthenticated } = useStoreSelector(selectAllAuthState);
  // if (isAuthenticated) {
  //   return <Navigate to={ROUTES.dashboard.index} />;
  // }

  return children;
}
