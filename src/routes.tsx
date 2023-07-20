import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navigation/navbar";
import React from "react";
import { Box } from "@mui/material";
import Offer from "./pages/offer";

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/offer",
    element: <Offer/>,
  }
];

type SingleRoute = {
  path: string;
  element: React.ReactNode;
};

const NavbarWrap = (routes: SingleRoute[]) => {
  return routes.map((route) => {
    return {
      ...route,
      element: (
        <Box maxWidth="lg">
          <Navbar />
          {route.element}
        </Box>
      ),
    };
  });
};

export const AppRoutes = createBrowserRouter(NavbarWrap(Routes));
