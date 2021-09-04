import React from "react";
import { useHistory } from "react-router";
import Card from "./ui/Card";
import classes from "./CatchupList.module.css";

const CatchupDetails: React.FC<{
  key: string;
  image: string;
  title: string;
  location: string;
  description: string;
}> = (props) => {

  const history = useHistory()

  const allCatchupsHandler =(event:React.MouseEvent)=>{
    history.push('/allcatchups')
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt="catch"/>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.location}</address>
          <h1 className={classes.description}>{props.description}</h1>
        </div>
        <div className={classes.actions}>
            <button onClick={allCatchupsHandler}>Catchups</button>
          </div>
      </li>
    </Card>
  );
};

export default CatchupDetails;
