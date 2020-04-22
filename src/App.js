import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Exercises from './components/Exercises'
import AddExercise from './components/AddExercise'
import EditExercise from './components/EditExercise'


class App extends Component {

  render() {
    return (
      <Router >
        <Navbar />
        <div className="text-light">
          <Route path="/" exact component={Exercises} />
          <Route path="/add" exact component={AddExercise} />
          <Route path="/edit/:id" exact component={EditExercise} />
        </div>
      </Router>

    );
  };
}

export default App;
