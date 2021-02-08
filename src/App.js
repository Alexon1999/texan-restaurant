import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import NavBarContextProvider from "./contexts/Navbar/NavBarState";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Commander from "./pages/Commander";
import Panier from "./pages/Panier";
import Contact from "./pages/Contact";
import Alerts from "./components/alert/Alerts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Alerts />
      <Router>
        <NavBarContextProvider>
          <NavBar />
        </NavBarContextProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/commander' component={Commander} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/panier' component={Panier} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
