import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setCurrentUser }) => {
  const [errMsg, setErrMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErrMsg(null);
        const user = userCredential.user;
        setCurrentUser(true);
        navigate("/profile");
      })
      .catch((error) => {
        setErrMsg(error.message);
      });
  };
  return (
    <div className="login">
      {errMsg && <span className="error">{errMsg}</span>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>User authentication</legend>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
