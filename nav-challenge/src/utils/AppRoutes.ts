export const APP_ROUTES = {
  dashboard: "/",
  signUp: "/signup",
};

export const COMPONENT_PAGES = {
  dashboard: "Dashboard",
  signUp: "SignUp",
};

export const ROUTE_COMPONENTS = [
  {
    path: APP_ROUTES.dashboard,
    component: COMPONENT_PAGES.dashboard,
    title: "Dashboard",
    // protected: true; TODO Later in project decide if route is protected
  },
  {
    path: APP_ROUTES.signUp,
    component: COMPONENT_PAGES.signUp,
    title: "Sign Up",
    protected: false,
  },
];
