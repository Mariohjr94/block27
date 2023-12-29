import { useState } from "react";

const SingUpForm = () => {
  const [userName, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Hello");
  };

  return (
    <div>
      <h2>Sing Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input type="text" value={userName} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:{" "}
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingUpForm;
