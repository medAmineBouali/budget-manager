import Modal from "./Modal";
import classes from "./Form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../../Data/DataSlice";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Groceries");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const categories = [
    "Groceries",
    "Dining Out",
    "Shopping",
    "Travel",
    "Healthcare",
    "Entertainment",
    "Utilities",
    "Education",
    "Transportation",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(dataActions.addExpense({
      
      category,
      date,
      amount: +amount,
      title,
    }))

    props.onCancelClick();
  };
  return (
    <Modal onOverlayClick={props.onCancelClick}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            step="0.05"
            onChange={(e) => setAmount(e.target.value)}
          />
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

export default ExpenseForm;
