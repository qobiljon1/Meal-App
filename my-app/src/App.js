import React from "react";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./component/HomePage/HomePage";
import Categories from "./component/Categories/Categories";
import RandomMeal from "./component/RandomMeal/RandomMeal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>  
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/random" component={RandomMeal} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
