import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Prompt } from "react-router";
import { Fragment } from "react";
import Card from "../components/ui/Card";
import classes from "./CatchupForm.module.css";

interface FormInput {
  addInput(
    title: string,
    image: string,
    location: string,
    description: string
  ): void;
}

const CatchupForm: React.FC<FormInput> = ({ addInput }) => {
  const [isEntering, setIsEntering] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  };
  const imageChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value)
  };
  const locationChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  };
  const descriptionChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    addInput(image, title, location, description)

    setImage('')
    setTitle('')
    setLocation('')
    setDescription('')
  };

  const finishedEnteringHandler = () =>{
    setIsEntering(false)
  }

  const formFocusedHandler=()=>{
    setIsEntering(true)
  }

  return (
    <Fragment>
      <Prompt when={isEntering} message={(location)=>'Are you sure you want to leave? All your entered data will be lost'} />
        <Card>
          <form onFocus={formFocusedHandler} className={classes.form} onSubmit={submitHandler}>
            <div className={classes.structure}>
              <label htmlFor="title">Meetup Title</label>
              <input
                onChange={titleChangeHandler}
                value={title}
                type="text"
                required
                id="title"
              />
            </div>
            <div className={classes.structure}>
              <label htmlFor="image">Meetup Image</label>
              <input
                onChange={imageChangeHandler}
                value={image}
                type="url"
                required
                id="image"
              />
            </div>
            <div className={classes.structure}>
              <label htmlFor="location">Location</label>
              <input
                onChange={locationChangeHandler}
                value={location}
                type="text"
                required
                id="location"
              />
            </div>
            <div className={classes.structure}>
              <label htmlFor="description">Description</label>
              <textarea
                onChange={descriptionChangeHandler}
                value={description}
                id="description"
                required
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button onClick={finishedEnteringHandler}>Add a Catchup</button>
            </div>
          </form>
        </Card>
    </Fragment>
  );
};

export default CatchupForm;
