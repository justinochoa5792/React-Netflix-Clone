import "./css/App.css";
import Main from "./pages/index";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
