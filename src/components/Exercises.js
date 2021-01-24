import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ExerciseItem from "./ExerciseItem";

const Exercises = () => {
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);

  const fetchExercises = useCallback(async () => {
    const { data } = await axios({
      url: "http://localhost:3001/exercises",
      method: "GET",
    });

    setLoading(false);
    setExercises(data);
  }, []);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  return (
    <div className="container-fluid">
      <h1>All Exercises</h1>

      {loading ? (
        "Loading"
      ) : exercises.length > 0 ? (
        exercises.map((data) => <ExerciseItem key={data._id} item={data} />)
      ) : (
        <p>
          There are no exercises yet, add one{" "}
          <a href="/add" className="text-light">
            Here
          </a>
        </p>
      )}
    </div>
  );
};

export default Exercises;
