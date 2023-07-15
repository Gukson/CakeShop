import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppTheme } from "./components/general/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <RouterProvider router={AppRoutes} />
      </ThemeProvider>
    </Container>
  );
};

export default App;
