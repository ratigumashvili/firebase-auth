import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import Login from "./pages/Login";
import AddRecords from "./pages/AddRecords";
function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireUser = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/addrecords"
          element={
            <RequireUser>
              <AddRecords />
            </RequireUser>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
