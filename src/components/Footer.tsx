import { Link } from "react-router-dom";
import classes from './Footer.module.css'

const Footer = () => {
    return (
    <div className={classes.container}>
        <div className={classes.footer}>
            <section className={classes.section1}>
                <h3>Create your own Catchup group</h3>
                <Link className={classes.button} to="/auth">Get Started</Link>
            </section>
            <section className={classes.section2}>
                <div>
                    <h4>Your Account</h4>
                    <p>Settings</p>
                    <p>Help</p>
                </div>
                <div>
                    <h4>Discover</h4>
                    <p>Groups</p>
                    <p>Calender</p>
                    <p>Topics</p>
                    <p>Cities</p>
                    <p>Online Events</p>
                </div>
                <div>
                    <h4>Catchup</h4>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Catchup Pro</p>
                    <p>Careers</p>
                    <p>App</p>
                </div>
                </section>
                <p className={classes.copy}>&copy; 2021 Catchup</p>
        </div>
    </div>
    )
}

export default Footer
