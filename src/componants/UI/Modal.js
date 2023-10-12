import classes from "./Modal.module.css";
import { Fragment,useContext } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}  onClick={props.onClick}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  );
};

//

const Modal = (props) => {
  const portalNode = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onOverlayClick}/>, portalNode)}
      {ReactDOM.createPortal(
        <ModalOverlay >{props.children}</ModalOverlay>,
        portalNode
      )}
    </Fragment>
  );
};
export default Modal;
