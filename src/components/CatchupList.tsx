import React from "react";
import { Fragment } from "react";
import Card from "./ui/Card";
import classes from "./CatchupList.module.css";
import { Link, useHistory } from "react-router-dom";

const CatchupList: React.FC<{
  key: string;
  image: string;
  title: string;
  location: string;
  description: string;
  onRemoveCatchup: () => void;
}> = (props) => {
  const history = useHistory()

  const catchupDetailsHandler =(event:React.MouseEvent)=>{
    history.push('/catchupdetail')
  }

  return (
      <Card>
        <li className={classes.item}>
          <div className={classes.image}>
            <img src={props.image} alt="catch" />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            {/* <address>{props.location}</address> */}
          </div>
          <div className={classes.actions}>
            <button onClick={catchupDetailsHandler}>Details</button>
            <button onClick={props.onRemoveCatchup}>Remove</button>
          </div>
        </li>
      </Card>
  );
};

export default CatchupList;
