import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Stats from "./pages/Stats";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <section>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </section>
      <footer>
        <h2>Made by Melvin Finn</h2>
        <p>Made with love</p>
      </footer>
    </Router>
  );
}

export default App;
