import React from "react";
import { Button, Form } from "semantic-ui-react";

const Register = (props) => {
  return (
    <div className="form-container">
      <Form>
        <h1>Register</h1>
        <Form.Input
          type="text"
          label="Username"
          name="username"
          placeholder="Username.."
          // value={values.username}
          // onChange={handleChange}
          // error={errors.username ? true : false}
        />
        <Form.Input
          type="email"
          label="Email"
          name="email"
          placeholder="Email.."
          // value={values.email}
          // onChange={handleChange}
          // error={errors.email ? true : false}
        />
        <Form.Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password.."
          // value={values.password}
          // onChange={handleChange}
          // error={errors.password ? true : false}
        />
        <Form.Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password.."
          // value={values.confirmPassword}
          // onChange={handleChange}
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
