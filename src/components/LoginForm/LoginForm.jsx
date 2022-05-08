import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./LoginForm.css";

function LoginForm() {
  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

// hooks 

    const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        navigate("/");
      });
    }
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (credentials.username && credentials.password) {
  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_API_URL}api-token-auth/`,
  //         {
  //           method: "post",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(credentials),
  //         }
  //       );
  //       const data = await response.json();
  //       window.localStorage.setItem("token", data.token);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  return (
    <form className="loginform">
      <div className="username-field">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className="password-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button className="login-button" type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;