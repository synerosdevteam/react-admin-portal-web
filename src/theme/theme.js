import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#094d7c",
    },
    secondary: {
      main: "#3c6ea0",
    },
    info: {
      main: "#b0dbff",
    },
  },
  // colorSchemes: { light: true, dark: true },
  // cssVariables: {
  //   colorSchemeSelector: "class",
  // },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            // background:
            //   "linear-gradient(90deg, #f1faff 0%,#b0dbff 50%, #f1faff 100%)",
            borderRadius: 999, // fully rounded like a pill
            transition: "all 0.3s ease",
          },
          "&:hover": {
            borderRadius: 999, // fully rounded like a pill
            transition: "all 0.3s ease",
          },
        },
      },
    },
  },
});
