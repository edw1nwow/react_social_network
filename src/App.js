import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) => {

  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Nav />
      <div className='App-wrapper'>
        <Route
          path='/(Profile| |)/'
          render={() => <Profile store={props.store} />}
        />
        <Route path='/Dialogs' render={() => <DialogsContainer store={props.store} />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/News' component={() => <News />} />
        <Route path='/Settings' component={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
