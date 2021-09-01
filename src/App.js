import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import Header from "./Components/Header";
import AddEdit from "./Components/AddEdit";
import ListRecord from "./Components/ListRecord";
import About from "./Components/About";
import Error from "./Components/Erorr";
import View from "./Components/view";
import GetStore from "./Components/GetstoreFB/GetStore";
import Main from "./Components/Instagram/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ListRecord} />
        <Route exact path="/add" component={AddEdit} />
        <Route exact path="/view/:id" component={View} />
        <Route exact path="/update/:id" component={AddEdit} />
        <Route exact path="/receive" component={GetStore} />
        <Route exact path="/about" component={About} />
        <Route exact path="/instagram" component={Main} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
