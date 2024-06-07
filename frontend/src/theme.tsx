import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5acccc",
      light: "#cffafa",
      dark: "#53c2c2",
    },
    secondary: {
      main: "#f76434",
    },
    text: {
      secondary: "#335c6e",
    },
  },
});

export default theme;
