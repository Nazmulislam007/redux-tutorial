import React from "react";
import { actionAuth } from "../store/auth-slice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionAuth.login());
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
