import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import MovieDetails from "./components/MovieDetails/movieDetails";
import PageNotFound from "./components/PageNotFound//pageNotFound";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:imdbid" component={MovieDetails} />
            <Route exact component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
