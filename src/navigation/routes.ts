import { generatePath } from "react-router-dom";

export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/signup',
  details: '/details/:id',
  form: '/form',
};

export const RoutesFunctions = {
  singleProperty: (id: string): string => generatePath(ROUTES.details, { id }),
};

