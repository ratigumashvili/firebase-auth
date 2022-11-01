import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
function App() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const RequireUser = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireUser>
              <Profile />
            </RequireUser>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
