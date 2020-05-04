import React, { Component } from "react";
import axios from 'axios';

class AddExercise extends Component {

    constructor() {
        super()

        this.state = {
            exercise: "",
            duration: 0,
            date: "",
            description: "",
            username: "",
            users: []
        }


        this.onChangeUsername = this.onChangeUsername.bind(this)

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

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit = (e) => {
        console.log(this.state.username);

        e.preventDefault()
        axios.post("http://localhost:3001/exercises/add-exercise", {
            exercise: this.state.exercise,
            duration: this.state.duration,
            date: this.state.date,
            description: this.state.description,
            username: this.state.username
        }).then(res => {
            if (res.status === 200) {
                window.location = "/"
            } else {
                return
            }
        })
            .catch(err => {
                return console.log(err);
            })
    };

    componentDidMount() {
        axios.get("http://localhost:3001/users/")
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    };



    render() {
        const { exercise, duration, date, description, users, username } = this.state;
        return (
            <div className="container-fluid mt-2">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exercise">Enter Exercise</label>
                        <input required type="text" id="exercise" value={exercise} className="form-control" placeholder="Exercise" onChange={this.onChangeExercise} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Enter Duration(In Minutes) </label>
                        <input required type="number" id="duration" value={duration} className="form-control" placeholder="Duration" onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Enter Date</label>
                        <input required type="date" id="date" value={date} className="form-control" placeholder="Date" onChange={this.onChangeDate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Enter Description</label>
                        <input required type="text" id="description" value={description} className="form-control" placeholder="Description" onChange={this.onChangeDesc} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Enter User</label>
                        <select className="form-control" required value={username} onChange={this.onChangeUsername}>
                            {
                                users.map((user) => {
                                    return <option 
                                    defaultValue
                                    key={user.username}
                                    value={user.username}> {user.username}
                                    </option>;
                                })
                            }
                        </select>
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