import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreatePetPage from "./pages/CreatePetPage";
import { Button, NoSsr, ThemeProvider, Typography } from "@material-ui/core";
import theme from "./common/theme";
import { BACKGROUND_URL, CUTE_PETS } from "./common/static";
import { useWindowHeight } from "@react-hook/window-size";
import {
  Route,
  BrowserRouter as Router,
  Link,
  Switch,
  HashRouter,
} from "react-router-dom";
import MyPetsPage from "./pages/MyPetsPage";
import BottomNav from "./components/BottomNav/BottomNav";
import backgroundUrl from "./backgroundImg.jpg";
function App() {
  const height = useWindowHeight();

  const goToCreate = () => {
    window.location.href = `/create`;
  };

  return (
    // <ThemeProvider theme={theme} >
    <NoSsr>
      <div
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          height: height - 56,
        }}
      >
        <HashRouter>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Route path="/dashboard">
              <MyPetsPage />
            </Route>
            <Route path="/create">
              <CreatePetPage />
            </Route>
            <Route path="/stats">
              <Typography variant="h3">Not implemented yet</Typography>
            </Route>

            <Route exact path="/">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: 100,
                }}
              >
                <img src={CUTE_PETS} style={{ height: 200, width: 200 }} />
                <Typography variant="h3">Peaceful Pets</Typography>
                <Button
                  color="primary"
                  href="#/create"
                  variant="contained"
                  style={{ marginTop: 100 }}
                >
                  Create your pet!
                </Button>
              </div>
            </Route>
          </div>
        </HashRouter>
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
