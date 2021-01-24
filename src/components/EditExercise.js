import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditExercise = () => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const { id } = useParams();

  const fetchExercise = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:3001/exercises/edit/${id}`);
      console.log(res);

      setExercise(res.data.exercise);
      setDuration(res.data.duration);
      setDate(res.data.date);
      setDescription(res.data.description);
      setUsername(res.data.username);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    fetchExercise();
  }, [fetchExercise]);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:3001/exercises/edit/${id}`, {
        exercise: exercise,
        duration: duration,
        date: date,
        description: description,
        username: username,
      });
      if (res.status === 200) {
        window.location = "/";
      } else {
        return alert("something went wrong!");
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
          <label htmlFor="duration">Enter Duration</label>
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
          <a className="btn btn-danger mr-2" href="/">
            Cancel
          </a>
          <button type="submit" className="btn btn-primary">
            Update Exercise
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
