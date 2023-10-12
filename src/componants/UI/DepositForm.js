import Modal from "./Modal";
import classes from "./Form.module.css";
import { useState } from "react";
import {useDispatch } from "react-redux";
import { dataActions } from "../../Data/DataSlice";

const DepositForm = (props) => {
  const [amount,setAmount] = useState();
  const dispatch = useDispatch();
  const AddHandler = (event) => {
    event.preventDefault();
    dispatch(dataActions.addDeposit(amount));
    props.onCancelClick();
  }
  return (
    <Modal onOverlayClick={props.onCancelClick}>
    <form onSubmit={(e)=>{AddHandler(e)}} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" step="0.05" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onCancelClick}
        >
          Cancel
        </button>
        <button className={classes.button}>Add</button>
      </div>
    </form>
    </Modal>
  );
};

export default DepositForm;