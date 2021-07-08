import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actionCreator";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <nav>
      <Button
        primary
        size="small"
        onClick={() => {
          localStorage.clear();
          history.push("/login");
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
