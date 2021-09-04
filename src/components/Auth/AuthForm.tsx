import React, { ChangeEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const emailChangeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
    setEnteredEmail(event.target.value)
  }
  const passwordChangeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
    setEnteredPassword(event.target.value)
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event:React.FormEvent) => {
    event.preventDefault();

    setEnteredEmail('')
    setEnteredPassword('')
   

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYGgLfxrA9bNAfytDtmm6V_mAiirVwWXM';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYGgLfxrA9bNAfytDtmm6V_mAiirVwWXM';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/')
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input onChange={emailChangeHandler} type='email' id='email' required value={enteredEmail} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            onChange={passwordChangeHandler}
            type='password'
            id='password'
            required
            value={enteredPassword}
          />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p className={classes.loading}>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;