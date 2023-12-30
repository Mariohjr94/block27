import { useState } from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";

const Authenitcate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      console.log("clicked");
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
};

export default Authenitcate;
