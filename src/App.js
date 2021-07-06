import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CreateUserForm from "./components/CreateUserForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditUserForm from "./components/EditUserForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreateUserForm} />
          <Route path="/edit" component={EditUserForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
