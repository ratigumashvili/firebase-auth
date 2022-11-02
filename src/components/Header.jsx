import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "reactstrap";

const Header = () => {
  const { dispatch, currentUser } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="header">
      <h1>TBI Collection data form</h1>
      {currentUser && (
        <Button onClick={logout} color="danger">
          Log Out
        </Button>
      )}
    </div>
  );
};

export default Header;
