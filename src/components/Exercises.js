import React, { Component } from "react";
import axios from 'axios';
import ExerciseItem from './ExerciseItem'

class Exercises extends Component {

    constructor() {
        super();

        this.state = {
            exercises: []
        };
    };


    componentDidMount() {
        axios.get("http://localhost:3001/")
            .then(res => {
                this.setState({
                    exercises: res.data
                });
            });
    };

    render() {
        const exercises = this.state.exercises;
        return (
            <div className="container-fluid grid">
                <h1>All Exercises</h1>

                {
                    exercises.length > 0 ?
                        exercises.map(data =>
                            <ExerciseItem key={data._id} exercise={data.exercise} duration={data.duration} date={data.date} description={data.description}/>
                        )
                        : <h3>There are no exercises yet, add one <a href="/add">Here</a> </h3>
                }

            </div>
        );
    };
};

export default Exercises