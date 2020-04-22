import React, { Component } from "react";
import axios from 'axios';
import ExerciseItem from './ExerciseItem'

class Exercises extends Component {

    constructor() {
        super();

        this.state = {
            exercises: [],
            loading: true
        };
    };


    componentDidMount() {
        axios.get("http://localhost:3001/")
            .then(res => {
                this.setState({
                    exercises: res.data,
                    loading: false
                });
            });
    };

    render() {
        const exercises = this.state.exercises;
        return (
            <div className="container-fluid">
                <h1>All Exercises</h1>

                {
                    this.state.loading ? "Loading" : exercises.length > 0 ?
                    exercises.map(data =>
                        <ExerciseItem key={data._id} id={data._id} exercise={data.exercise} duration={data.duration} date={data.date} description={data.description}/>
                    )
                    : <h3>There are no exercises yet, add one <a href="/add">Here</a> </h3>
                }

            </div>
        );
    };
};

export default Exercises