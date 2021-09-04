import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useContext} from "react";
import { Fragment } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllCatchups from "./pages/AllCatchups";
import CatchupForm from "./pages/CatchupForm";
import CatchupDetail from "./pages/CatchupDetail";
import Catchup from './models/catchup';
import Footer from "./components/Footer";
import Layout from "./components/ui/Layout";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./store/auth-context";

function App() {

  const recentCatchups = [
    new Catchup ('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lZXR1cCUyMGdyb3VwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'hilltop group', 'Berlin', 'The place to be')
  ]
  const history = useHistory();
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  const [catchups, setCatchups]=useState<Catchup[]>(recentCatchups)

  const addInputHandler = (
    enteredImage: string,
    enteredTitle: string,
    enteredLocation: string,
    enteredDescription: string) => {
      const newCatchup = new Catchup(enteredImage, enteredTitle, enteredLocation, enteredDescription)
    
      setCatchups((prevCatchups)=>{
        return prevCatchups.concat(newCatchup)
      })

      history.push("/allcatchups");
    };

    const removeCatchupHandler =(catchUpId:string)=>{
      setCatchups((prevCatchups)=>{
        return prevCatchups.filter(item=>item.id !== catchUpId)
      })
    }
  

  return (
    <Fragment>
      <Layout>
      <main>
        <Switch>
        <Route path="/" exact>
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage" exact>
          <HomePage />
        </Route>
        <Route path="/allcatchups" exact>
        {isLoggedIn && <AllCatchups catchups={catchups} onRemoveCatchup={removeCatchupHandler}/>}
        {!isLoggedIn && <Redirect to='/auth'/>}
        </Route>
        <Route path="/catchupform" exact>
        {isLoggedIn && <CatchupForm addInput={addInputHandler} />}
        {!isLoggedIn && <Redirect to='/auth'/>}
        </Route>
        <Route path="/catchupdetail" exact>
        {isLoggedIn && <CatchupDetail catchups={catchups} />}
        {!isLoggedIn && <Redirect to='/auth'/>}
        </Route>
        {!isLoggedIn && <Route path="/auth" exact>
          <AuthPage/>
        </Route>}
        <Route path='/profile'>
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to='/auth'/>}
        </Route>
        <Route path="*">
        <Redirect to='/auth'/>
        </Route>
        </Switch>
      </main>
      <Footer/>
      </Layout>
    </Fragment>
  );
}

export default App;
