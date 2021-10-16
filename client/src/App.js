import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

function App() {
  const url = "https://ow-api.com/v1/stats/pc/us/champion-12648/profile";
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        setProfile(response.data);
      },
      [url]
    );
  });

  if (profile) {
    return (
      <Router>
        <Header />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </section>
        <footer>
          {profile.name}
          <h2>Made by Melvin Finn</h2>
          <p>Made with love</p>
        </footer>
      </Router>
    );
  } else {
    return <div>No data</div>;
  }
}

export default App;
