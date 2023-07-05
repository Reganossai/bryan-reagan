import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
