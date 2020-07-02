import React, { Component } from 'react';

class ExerciseItem extends Component {
    render() {
        return (
            <div className="card mt-2 border-secondary">
                <div className="card-header bg-dark text-light border-dark">
                    Exercise: {this.props.exercise} By {this.props.user}
                    <div className="float-right">
                        <a href={"http://localhost:3001/exercises/delete/" + this.props.id} className="btn btn-danger mr-2">Delete</a>
                        <a href={"/exercises/edit/" + this.props.id} className="btn btn-success">Edit</a>
                    </div>
                </div>
                <div className="card-body bg-secondary text-light">
                    Description/Notes: {this.props.description ? this.props.description : "No Description Added"}
                </div>
                <div className="card-footer bg-dark text-light">
                    Duration: {this.props.duration} Minutes <br />
                    Date: {this.props.date}
                </div>
            </div>
        );
    };
};

export default ExerciseItem;