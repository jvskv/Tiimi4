import React from "react";
import MenuBar from "./components/MenuBar";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: "#ffd180",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
    </ThemeProvider>
  );
}

export default App;
