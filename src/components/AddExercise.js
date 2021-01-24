import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const AddExercise = () => {
  const [users, setUsers] = useState([]);
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3001/users",
        method: "GET",
      });

      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/exercises/", {
        exercise: exercise,
        duration: duration,
        date: date,
        description: description,
        username: username,
      });

      if (res.status === 200) {
        window.location = "/";
      } else {
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="container-fluid mt-2">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exercise">Enter Exercise</label>
          <input
            required
            type="text"
            id="exercise"
            value={exercise}
            className="form-control"
            placeholder="Exercise"
            onChange={(e) => setExercise(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Enter Duration(In Minutes) </label>
          <input
            required
            type="number"
            id="duration"
            value={duration}
            className="form-control"
            placeholder="Duration"
            onChange={(e) => setDuration(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Enter Date</label>
          <input
            required
            type="date"
            id="date"
            value={date}
            className="form-control"
            placeholder="Date"
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Enter Description</label>
          <input
            required
            type="text"
            id="description"
            value={description}
            className="form-control"
            placeholder="Description"
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Enter User</label>
          <select
            className="form-control"
            required
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          >
            <option value="">Select..</option>
            {users.map((user) => {
              return (
                <option defaultValue key={user.username} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <a className="btn btn-danger mr-2" href="/">
            Cancel
          </a>
          <button type="submit" className="btn btn-primary">
            Add Exercise
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExercise;
