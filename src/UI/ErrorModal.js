import React from "react";
import Button from "./Button";
import { Card } from "./Card";
import classes from "./ErrorModal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};
export const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onOkayHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onOkayHandler={props.onOkayHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
