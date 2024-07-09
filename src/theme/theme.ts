import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    sidebar: string;
    topBar: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#02D076",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#10BFFC",
      contrastText: "#ffffff",
    },
    background: {
      sidebar: "#1A2638",
      topBar: "#212a38",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          letterSpacing: "0.02em",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, .125)",
        },
      },
    },
  },
});

export default theme;
