import React from "react";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import Catchup from "../models/catchup";
import Catchups from "../components/Catchups";
import CatchupDetails from "../components/CatchupDetails";

const AllCatchups: React.FC<{
  catchups: Catchup[];
  onRemoveCatchup: (catchUpId: string) => void;
}> = (props) => {
  // const catchups =  [ new Catchup('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80', 'my title', 'my location', '')];
  return (
    <Fragment>
      <Catchups
        catchups={props.catchups}
        onRemoveCatchup={props.onRemoveCatchup}
      />
    </Fragment>
  );
};

export default AllCatchups;
