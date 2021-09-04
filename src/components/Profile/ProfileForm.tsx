import {useState, useContext, ChangeEvent} from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const [newPassword, setNewPassword] = useState('')
  const authCtx = useContext(AuthContext);
  const history = useHistory()

  const passwordChangeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
    setNewPassword(event.target.value)
  }

  const submitHandler =(event:React.FormEvent)=>{
    event.preventDefault();

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBYGgLfxrA9bNAfytDtmm6V_mAiirVwWXM', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      history.replace('/')
      alert('Password successfully changed')
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={7} onChange={passwordChangeHandler} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;