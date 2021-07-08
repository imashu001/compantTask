import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { loginInit } from "../redux/actionCreator";

import { Link } from "react-router-dom";

const Login = (props) => {
  const [adminDetails, setAdminDetails] = useState({});
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((redux) => redux.adminState);

  useEffect(() => {
    if (loginSuccess && props.history) {
      props.history.push("/");
    }
  }, [loginSuccess, props.history]);

  const handleChange = (e) => {
    setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    dispatch(loginInit(adminDetails));
  };

  return (
    <div className="form-container">
      <Form onSubmit={submitHandler}>
        <h1>Login</h1>
        <Form.Input
          type="text"
          label="Username"
          name="userName"
          placeholder="Username.."
          onChange={handleChange}
        />
        <Form.Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password.."
          onChange={handleChange}
        />
        <Button type="submit" primary>
          Login
        </Button>
        <Link to="/register"> Create an Account</Link>
      </Form>
    </div>
  );
};

export default Login;
