import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exercises from "./components/Exercises";
import AddExercise from "./components/AddExercise";
import EditExercise from "./components/EditExercise";
import AddUser from "./components/AddUser";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="text-light">
        <Route path="/" exact component={Exercises} />
        <Route path="/exercises/add" exact component={AddExercise} />
        <Route path="/exercises/edit/:id" exact component={EditExercise} />

        <Route path="/user/add" exact component={AddUser} />
      </div>
    </Router>
  );
};

export default App;
