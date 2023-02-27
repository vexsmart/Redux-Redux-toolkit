import { useState } from "react";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import {authActions} from '../store/Redux-index'

const Auth = () => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  let formIsValid = false;

  const emailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.trim().includes("@");
  const passwordIsValid =
    enteredPassword.trim() !== "" && enteredPassword.trim().length >= 6;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
    if (!formIsValid) {
      return;
    }
    
    console.log(authActions.login)
    dispatch(authActions.login());


    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmission}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={emailHandler}
              value={enteredEmail}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={passwordHandler}
              value={enteredPassword}
              type="password"
              id="password"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
