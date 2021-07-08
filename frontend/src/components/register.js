import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { signUpInit } from "../redux/actionCreator";

const Register = (props) => {
  const [adminDetails, setAdminDetails] = useState({})
  const dispatch = useDispatch()
  const handleChange = (e) => {
      setAdminDetails({...adminDetails, [e.target.name]:e.target.value})
  }

  const submitHandler = () => {
    dispatch(signUpInit(adminDetails))
  }
  return (
    <div className="form-container">
      <Form onSubmit={submitHandler}>
        <h1>Register</h1>
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
          type="email"
          label="Email"
          name="email"
          placeholder="Email.."
          // value={values.email}
          onChange={handleChange}
          // error={errors.email ? true : false}
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
        <Form.Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password.."
          // value={values.confirmPassword}
          onChange={handleChange}
          // error={errors.confirmPassword ? true : false}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
