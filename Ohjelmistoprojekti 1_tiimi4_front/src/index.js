import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Etusivu from "./components/Etusivu";
import Kysely1 from "./components/Kysely1";
import Kysely2 from "./components/Kysely2";
import Tulokset from "./components/HaeTulokset1";
import Tulokset2 from "./components/Tulokset2";

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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={ <Etusivu />} />
          <Route path="/kysely1" element={ <Kysely1 /> } />
          <Route path="/kysely2" element={ <Kysely2 /> } />
          <Route path="/tulokset" element={ <Tulokset /> } />
          <Route path="/tulokset2" element={ <Tulokset2 /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
