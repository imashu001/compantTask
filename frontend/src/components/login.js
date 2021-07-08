import React from "react";
import { Button, Form } from "semantic-ui-react";

const Login = (props) => {
  
  return (
    <div className="form-container">
      <Form>
        <h1>Login</h1>
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
          type="password"
          label="Password"
          name="password"
          placeholder="Password.."
          // value={values.password}
          // onChange={handleChange}
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
