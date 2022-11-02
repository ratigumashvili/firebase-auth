import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Form, Label, Input, Button, Row, Col } from "reactstrap";

const Login = () => {
  const [errMsg, setErrMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErrMsg(null);
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/addrecords");
      })
      .catch((error) => {
        setErrMsg(error.message);
      });
  };
  return (
    <div className="login">
      {errMsg && <span className="error">{errMsg}</span>}
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>User authentication</legend>
          <Row>
            <Col sm="12" md="5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col sm="12" md="5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            <Col sm="12" md="2" className="align-end">
              <Button type="submit" color="primary" block>
                Submit
              </Button>
            </Col>
          </Row>
        </fieldset>
      </Form>
    </div>
  );
};

export default Login;
