import { Fragment } from 'react';
import classes from './HomePage.module.css';

const HomePage = () =>{
    return (
        <Fragment>
            <div className={classes.board}>
                <img src='https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80' alt='catchup for all'/>  
            </div>
            <div className={classes.summary}>
                <h1>Meet • Communicate • Connect</h1>
                <p>Find the group that suits you, and connect with like minded people.</p>
            </div>
            <div className={classes.cards1}>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Language Meetup</h2>
                    <h4>Sat, Sep 4, 2:00 PM</h4>
                    <p className={classes.para1}>Filmhaus • Saarbrücken</p>
                    <p className={classes.para2}>58 Followers</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Management Seminar</h2>
                    <h4>Wed, Mar 11, 1:00 PM</h4>
                    <p className={classes.para1}>Studio 30 • Mannheim</p>
                    <p className={classes.para2}>33 Followers</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1453486250080-eff794c98b6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lZXR1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Social and Business Connection</h2>
                    <h4>Aug, Oct 7, 3:30 PM</h4>
                    <p className={classes.para1}>Rose Hotel • Frankfurt</p>
                    <p className={classes.para2}>78 Followers</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Yoga Class</h2>
                    <h4>Sat, July 13, 6:00 PM</h4>
                    <p className={classes.para1}>Wellness Center • Bonn</p>
                    <p className={classes.para2}>112 Followers</p>
                </div>
               
            </div>


            <div className={classes.cards2}>
            <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1607134958857-f8328f15ab33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0aW5nJTIwZ3JvdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Couple Retreat</h2>
                    <h4>Sun, Jan 9, 7:00 PM</h4>
                    <p className={classes.para1}>Goldgarden Cologne</p>
                    <p className={classes.para2}>45 Followers</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0aW5nJTIwZ3JvdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Speed Dating event</h2>
                    <h4>Friday, Feb 2, 8:00 PM</h4>
                    <p className={classes.para1}>3 Bars • Berlin</p>
                    <p className={classes.para2}>51 Followers</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1616376392785-8e7e283571e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHlvZ2ElMjBjbGFzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Outdoor Meditation</h2>
                    <h4>Sat, July 10, 6:00 PM</h4>
                    <p className={classes.para1}>Hilltop • Bochum</p>
                    <p className={classes.para2}>51 Followers</p>
                </div>
                <div className={classes.image}>
                    <img src='https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <h2>Fitness Meetup</h2>
                    <h4>Thu, Sep 1, 2:00 PM</h4>
                    <p className={classes.para1}>Tallstrasse • Saarbrücken</p>
                    <p className={classes.para2}>22 Followers</p>
                </div>
            </div>
        </Fragment>
    )
    
}

export default HomePage;