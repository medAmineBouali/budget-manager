import { useSelector } from "react-redux";
import classes from "./History.module.css";

const History = () => {
  const expenses = useSelector((state) => state.data.expenses); // Assuming your expenses data is stored in the Redux state

const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className={classes.history}>
      <h2>Expense History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody >
            {sortedExpenses.map((expense) => (
            <tr key={expense.uid}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.title}</td>
              <td>${expense.amount.toFixed(2)}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
      <div></div>
    </div>
  );
};

export default History;