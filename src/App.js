import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import Login from "./pages/Login";
import AddRecords from "./pages/AddRecords";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireUser = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <Container className="app">
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
    </Container>
  );
}

export default App;
