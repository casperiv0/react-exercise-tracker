import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Exercises from './components/Exercises'
import AddExercise from './components/AddExercise'

class App extends Component {

  render() {
    return (
      <Router >
        <Navbar />
        <Route path="/" exact component={Exercises} />
        <Route path="/add" exact component={AddExercise} />
      </Router>

    );
  };
}

export default App;
