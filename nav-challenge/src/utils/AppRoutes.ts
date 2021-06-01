export const APP_ROUTES = {
  dashboard: "/",
};

export const COMPONENT_PAGES = {
  dashboard: "Dashboard",
};

export const ROUTE_COMPONENTS = [
  {
    path: APP_ROUTES.dashboard,
    component: COMPONENT_PAGES.dashboard,
    title: "Dashboard",
    // protected: true; TODO Later in project decide if route is protected
  },
];
