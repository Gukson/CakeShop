import { createTheme } from "@mui/material";

export const primary = "#2e94a6";

export const AppTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e94a6",
    },
    background: {
        default: "#00778c",
    },
    text:{
        primary: "#ffffff",
    }
  },
  typography: {
    fontFamily: "Roboto",
  }
});
