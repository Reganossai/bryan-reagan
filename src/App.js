import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/about">
          <About/>
          </Route>
          <Route exact path="/buy">
          <Buy/>
          </Route>
          <Route exact path="/payment">
          <Payment/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
