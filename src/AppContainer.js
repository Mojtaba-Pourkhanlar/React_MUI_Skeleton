import { ThemeProvider, CssBaseline } from "@mui/material";
import { Home } from "./frontEnd/components";
import { theme } from "./frontEnd/mui/theme";

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default AppContainer;
