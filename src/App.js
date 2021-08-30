import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddEdit from "./Components/AddEdit";
import ListRecord from "./Components/ListRecord";
import About from "./Components/About";
import Error from "./Components/Erorr";
import View from "./Components/view";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ListRecord} />
        <Route exact path="/add" component={AddEdit} />
        <Route exact path="/view/:id" component={View} />
        <Route exact path="/update/:id" component={AddEdit} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
