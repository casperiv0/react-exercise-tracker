const ExerciseItem = ({ item }) => {
  return (
    <div className="card mt-2 border-secondary">
      <div className="card-header bg-dark text-light border-dark">
        Exercise: {item.exercise} By {item.username}
        <div className="float-right">
          <a
            href={`http://localhost:3001/exercises/delete/${item._id}`}
            className="btn btn-danger mr-2"
          >
            Delete
          </a>
          <a href={`/exercises/edit/${item._id}`} className="btn btn-success">
            Edit
          </a>
        </div>
      </div>
      <div className="card-body bg-secondary text-light">
        Description/Notes: {item.description ? item.description : "No Description Added"}
      </div>
      <div className="card-footer bg-dark text-light">
        Duration: {item.duration} Minutes <br />
        Date: {item.date}
      </div>
    </div>
  );
};

export default ExerciseItem;
