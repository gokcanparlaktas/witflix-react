import { useState } from "react";
import Profile from "./components/Profile";
import "./Form.css";

const APIDataStatic = [
  {
    createdAt: "2024-10-17T03:53:51.456Z",
    name: "Alyssa Reinger IV",
    avatarUrl: "https://api.multiavatar.com/1212.svg",
    id: "1",
  },
  {
    createdAt: "2024-10-17T07:00:18.480Z",
    name: "Dr. Sharon Howe",
    avatarUrl: "https://api.multiavatar.com/740.svg",
    id: "2",
  },
  {
    createdAt: "2024-10-16T19:29:04.974Z",
    name: "Lila Murray",
    avatarUrl: "https://api.multiavatar.com/128.svg",
    id: "3",
  },
  {
    createdAt: "2024-10-16T19:54:13.416Z",
    name: "Mildred Grimes",
    avatarUrl: "https://api.multiavatar.com/1135.svg",
    id: "4",
  },
];

const sampleUser = {
  createdAt: "2024-10-16T19:54:13.416Z",
  name: "Hamdullah Suphi",
  avatarUrl: "https://api.multiavatar.com/1453.svg",
  id: "5",
};

function App() {
  const [user, setUser] = useState({ username: "" });
  const [users, setUsers] = useState(APIDataStatic);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedUser = {
      ...user,
      id: Date.now(),
      avatarUrl: `https://api.multiavatar.com/${user.username}.svg`,
    };
    handleAddUser(submittedUser);
  };

  return (
    <>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            value={user.username}
            type="text"
            name="username"
            id="username"
            placeholder="Kullanıcı Adı"
          />
        </div>
      </form>

      <button type="submit">Add User</button>

      {users.map((user) => (
        <Profile key={user.id} info={user} />
      ))}
    </>
  );
}

export default App;
