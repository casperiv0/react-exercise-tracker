import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [message, setMessage] = useState(null);
  const [username, setUsername] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios({
        url: "http://localhost:3001/users/",
        method: "POST",
        data: {
          username: username,
        },
      });

      if (res.data === "OK") {
        window.location = "/";
      } else {
        return setMessage(res.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="container-fluid mt-2">
      <form onSubmit={onSubmit}>
        {message ? <div className="alert alert-danger">{message}</div> : null}
        <div className="form-group">
          <label htmlFor="exercise">Enter Username</label>
          <input
            required
            type="text"
            id="username"
            value={username}
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <a className="btn btn-danger mr-2" href="/">
            Cancel
          </a>
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
