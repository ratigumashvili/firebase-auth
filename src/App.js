import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
function App() {
  const [currentUser, setCurrentUser] = useState(false);

  const RequireUser = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <div className="app">
      <h1>hello firebase</h1>
      <Routes>
        <Route index element={<Login setCurrentUser={setCurrentUser} />} />
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
