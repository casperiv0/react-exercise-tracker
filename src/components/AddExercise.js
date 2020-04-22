import React, { Component } from "react";
import axios from 'axios';

class AddExercise extends Component {

    constructor() {
        super()

        this.state = {
            exercise: "",
            duration: 0,
            date: "",
            description: ""
        }

    };

    onChangeExercise = (e) => {
        this.setState({
            exercise: e.target.value
        });
    };


    onChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate = (e) => {
        this.setState({
            date: e.target.value
        });
    }

    onChangeDesc = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/add-exercise", {
            exercise: this.state.exercise,
            duration: this.state.duration,
            date: this.state.date,
            description: this.state.description
        }).then(res => {
            if (res.status === 200) {
                window.location = "/"
            } else {
                return alert("something went wrong!")
            }
        });
    }



    render() {
        return (
            <div className="container-fluid mt-2">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exercise">Enter Exercise</label>
                        <input required type="text" id="exercise" value={this.state.exercise} className="form-control" placeholder="Exercise" onChange={this.onChangeExercise} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Enter Duration</label>
                        <input required type="number" id="duration" value={this.state.duration} className="form-control" placeholder="Duration" onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Enter Date</label>
                        <input required type="date" id="date" value={this.state.date} className="form-control" placeholder="Date" onChange={this.onChangeDate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Enter Description</label>
                        <input required type="text" id="description" value={this.state.description} className="form-control" placeholder="Date" onChange={this.onChangeDesc} />
                    </div>
                    <div className="form-group">
                        <a className="btn btn-danger mr-2" href="/">Cancel</a>
                        <button type="submit" className="btn btn-primary">Add Exercise</button>
                    </div>
                </form>
            </div>
        );
    };
};

export default AddExercise