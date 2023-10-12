import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./AuthForm.module.css";

function AuthForm({onSubmit,isLogin,setError,Message}) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setMatch] = useState("");

  // function switchAuthHandler() {
  //   setisLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }
  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setError(null);
    }, 2000);

    return () => clearTimeout(errorTimeout);
  }, [email, password, userName, passwordMatch]);

  
  return (
    <>
      <Form className={classes.form} onSubmit={(e)=>onSubmit(e,email,password,passwordMatch,userName)}>
        <h1>{isLogin ? "Login" : "Sign up"}</h1>
        {!isLogin && (
          <p>
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              name="userName"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              required
            />
          </p>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </p>
        {!isLogin && (
          <p>
            <label htmlFor="password-confirmation">Confirm Password</label>
            <input
              id="password-confirmation"
              type="password"
              name="password-confirmation"
              onChange={(event) => setMatch(event.target.value)}
              required
            />
          </p>
        )}
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "sign" : "login"}`}>
            {isLogin ? "New user" : "Login"}
          </Link>
          <button>{isLogin ? "Login" : "Sign up"}</button>
        </div>
        {Message && <p style={{color:"goldenrod"}}>{Message}</p>}
      </Form>
    </>
  );
}

export default AuthForm;
