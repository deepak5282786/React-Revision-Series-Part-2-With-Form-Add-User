import React from "react";
import Button from "./Button";
import { Card } from "./Card";
import classes from "./ErrorModal.module.css";

export const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onOkayHandler}>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <header>
            <h2>{props.title}</h2>
          </header>
        </div>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <div className={classes.actions}>
          <Button onClick={props.onOkayHandler}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};
