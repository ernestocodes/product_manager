import { BrowserRouter, Switch, Route } from "react-router-dom"
import Create from "./views/Create";
import Dashboard from "./views/Dashboard";
import EditProduct from "./views/EditProduct";
import Main from "./views/Main";
import OneProduct from "./views/OneProduct";

function App() {
  return (
    <div className="container bg-dark text-warning w-50 mt-5 p-3">
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Main />
          </Route>
          {/* <Route exact path="/products">
            <Dashboard />
          </Route> */}
          {/* <Route exact path="/products/create">
            <Create />
          </Route> */}
          <Route exact path="/products/:id">
            <OneProduct />
          </Route>
          <Route exact path="/products/:id/edit">
            <EditProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
