import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { dispatch, currentUser } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="header">
      <h1>App titile</h1>
      {currentUser && <button onClick={logout}>Log Out</button>}
    </div>
  );
};

export default Header;
