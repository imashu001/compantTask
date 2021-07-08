import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home"
import Register from "./components/register";
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
