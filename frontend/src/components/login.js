import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { loginInit } from "../redux/actionCreator";

const Login = (props) => {

  const [adminDetails, setAdminDetails] = useState({})
  const dispatch = useDispatch()
  const { loginSuccess } = useSelector((redux) => redux.adminState)

  useEffect(() => {
    if(loginSuccess && props.history) {
      props.history.push('/')
    }
  }, [loginSuccess, props.history])

  const handleChange = (e) => {
      setAdminDetails({...adminDetails, [e.target.name]:e.target.value})
  }

  const submitHandler = () => {
    dispatch(loginInit(adminDetails))
  }
  
  return (
    <div className="form-container">
      <Form onSubmit={submitHandler}>
        <h1>Login</h1>
        <Form.Input
          type="text"
          label="Username"
          name="userName"
          placeholder="Username.."
          // value={values.username}
          onChange={handleChange}
          // error={errors.username ? true : false}
        />
        <Form.Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password.."
          // value={values.password}
          onChange={handleChange}
          // error={errors.password ? true : false}
        />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
