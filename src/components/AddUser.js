import React, { Component } from "react";
import axios from 'axios';

class AddExercise extends Component {

    constructor() {
        super()

        this.state = {
            username: "",
            message: ""
        }

    };

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/users/add", {
            username: this.state.username
        }).then(res => {
            if (res.data === "OK") {
                window.location = "/"
            } else {
               return this.setState({
                    message: res.data
                })
            }
        });
    }



    render() {
        const { message } = this.state;
        return (
            <div className="container-fluid mt-2">
                <form onSubmit={this.onSubmit}>
                    {
                        message ? <div className="alert alert-danger"> {message} </div> : null
                    }
                    <div className="form-group">
                        <label htmlFor="exercise">Enter Username</label>
                        <input required type="text" id="username" value={this.state.username} className="form-control" placeholder="Username" onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <a className="btn btn-danger mr-2" href="/">Cancel</a>
                        <button type="submit" className="btn btn-primary">Add Username</button>
                    </div>
                </form>
            </div>
        );
    };
};

export default AddExercise