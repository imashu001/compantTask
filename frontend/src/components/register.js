import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import {
  logout,
  registerAdminSuccess,
  signUpInit,
} from "../redux/actionCreator";

const Register = (props) => {
  const [adminDetails, setAdminDetails] = useState({});
  const dispatch = useDispatch();
  const { registered } = useSelector((state) => state.adminState);

  const handleChange = (e) => {
    setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (registered) {
      props.history.push("/login");
    }
    return dispatch(logout());
  }, [registerAdminSuccess, registered]);

  const submitHandler = () => {
    dispatch(signUpInit(adminDetails));
  };
  return (
    <div className="form-container">
      <Form onSubmit={submitHandler}>
        <h1>Register</h1>
        <Form.Input
          type="text"
          label="Username"
          name="userName"
          placeholder="Username.."
          onChange={handleChange}
        />
        <Form.Input
          type="email"
          label="Email"
          name="email"
          placeholder="Email.."
          onChange={handleChange}
        />
        <Form.Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password.."
          onChange={handleChange}
        />
        <Form.Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password.."
          onChange={handleChange}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
