import { useSelector, useDispatch} from "react-redux";
import { uiActions } from "../componants/UI/UIState";
import styles from "./UserCard.module.css";
import profilePic from "../assets/userImage.jpg";

const UserCard = () => {
  const dispatch = useDispatch(); 

  const ExpenseFormToggle = () => {
    dispatch(uiActions.ExpenseFormSwitch()); 
  };
  const IncomeFormToggle = () => {
    dispatch(uiActions.IncomeFormSwitch());
  };
  const DepositeFormToggle = () => {
    dispatch(uiActions.AddFormSwitch());
  };
  const balance = useSelector((state) => state.data.balance);
  const userName = useSelector((state) => state.user.displayName);
  const uid = useSelector((state) => state.user.uid);
  const monthlyIncome = useSelector((state) => state.data.monthlyIncome);
  return (
    <div className={styles.card}>
      <div style={profileStyles}>
        <img src={profilePic} alt="Profile Pic"></img>
        <h3>{userName}</h3>
      </div>
      <div className={styles.balance}>
        <div>
          <h1>Balance:</h1>
          <h1>${balance}</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p className={styles.uid}>
            UID:<span>{uid}</span>
          </p>
        </div>
      </div>
      <div className={styles.monthly}>
        <label>MonthlyIncome</label>
        <h1>${monthlyIncome}</h1>
        <button onClick={IncomeFormToggle}>Edit</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{ backgroundColor: "green" }}
          onClick={DepositeFormToggle}
          className="add"
        >
          +Add Money
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={ExpenseFormToggle}
          className="withdraw"
        >
          -Add expense
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default UserCard;

const profileStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
