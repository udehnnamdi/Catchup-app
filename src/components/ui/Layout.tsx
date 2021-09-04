import React from 'react';
import classes from './Layout.module.css';
import Header from '../Header';

const Layout:React.FC =(props) =>{
  return (
    <div>
        <Header/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;