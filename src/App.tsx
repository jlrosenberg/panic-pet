import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreatePetPage from "./pages/CreatePetPage";
import { ThemeProvider } from "@material-ui/core";
import theme from "./common/theme";
import { BACKGROUND_URL } from "./common/static";

function App() {
  return (
    // <ThemeProvider theme={theme} >
    <div
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundRepeat: "repeat",
        height: "1000px",
      }}
    >
      <CreatePetPage />
    </div>

    // </ThemeProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
