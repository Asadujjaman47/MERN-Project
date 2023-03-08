import Axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [listOfUsers, setListOfUsers] = useState([
    { id: 1, name: "Akul", age: 25, username: "Akul25" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([...listOfUsers, { name, age, username }]);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
  };

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
              <hr />
            </div>
          );
        })}
      </div>
      {/* <div className="inputUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div> */}

      <div className="inputUser">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Age..."
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
}

export default App;
