import {useContext} from 'react';
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';
import AuthContext from '../store/auth-context';

const Header = () => {
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn
    const logoutHandler =()=>{
        authCtx.logout();
    }

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    {!isLoggedIn && <li>
                        <NavLink activeClassName={classes.active} to="/homepage">Home Page</NavLink>
                    </li>}
                    {!isLoggedIn && <li>
                        <NavLink activeClassName={classes.active} to="/auth">Login</NavLink>
                    </li>}
                   {isLoggedIn && <li>
                        <NavLink activeClassName={classes.active} to="/profile">Profile</NavLink>
                    </li>}
                    {isLoggedIn && <li>
                        <NavLink activeClassName={classes.active} to="/allcatchups">All Catchups</NavLink>
                    </li>}
                    {isLoggedIn && <li>
                        <NavLink activeClassName={classes.active} to="/catchupform">Add New Catchup</NavLink>
                    </li>}
                    {isLoggedIn && <li>
                        <NavLink activeClassName={classes.active} onClick={logoutHandler} to="/homepage">Logout</NavLink>
                    </li>}
                </ul>

            </nav>

        </header>
    )
}

export default Header
