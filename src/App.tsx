import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreatePetPage from "./pages/CreatePetPage";
import { NoSsr, ThemeProvider } from "@material-ui/core";
import theme from "./common/theme";
import { BACKGROUND_URL } from "./common/static";
import { useWindowHeight } from "@react-hook/window-size";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import MyPetsPage from "./pages/MyPetsPage";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  const height = useWindowHeight();
  return (
    // <ThemeProvider theme={theme} >
    <NoSsr>
      <div
        style={{
          backgroundImage: `url(${BACKGROUND_URL})`,
          backgroundRepeat: "repeat",
          height: height - 56,
        }}
      >
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/create">
                <CreatePetPage />
              </Route>
              <Route path="/dashboard">
                <MyPetsPage />
              </Route>
              <Route path="/">
                <CreatePetPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <BottomNav />
    </NoSsr>

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
