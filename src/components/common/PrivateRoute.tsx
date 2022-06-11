// import { useStoreSelector } from 'hooks/common';
// import { selectAllAuthState } from 'store/slices/auth';

// const PLAQADH_URL = process.env.REACT_APP_PLAQADH_URL || 'https://h.plaqad.com';
// const PRESOFIS_APP_ID = process.env.REACT_APP_APP_ID || 'presofis';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  // const { isAuthenticated } = useStoreSelector(selectAllAuthState);

  // if (!isAuthenticated) {
  //   window.location.assign(`${PLAQADH_URL}/login?code=${PRESOFIS_APP_ID}`);
  // }

  return children;
}
