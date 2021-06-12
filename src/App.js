import "./css/App.css";
import Main from "./pages/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
