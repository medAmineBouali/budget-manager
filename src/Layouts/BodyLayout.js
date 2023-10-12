import { Outlet, useParams } from "react-router-dom";
import classes from "./BodyLayout.module.css";
import NavigationBar from "../componants/Navigation/NavigationBar";
import ExpenseForm from "../componants/UI/ExpenseForm";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../componants/UI/UIState";
import DepositForm from "../componants/UI/DepositForm";
import IncomeForm from "../componants/UI/IncomeChangeForm";

export default function () {
  const ExpenseFormOn = useSelector((state) => state.ui.ExpenseFormOn);
  const AddFormOn = useSelector((state) => state.ui.AddFormOn);
  const IncomeFormOn = useSelector((state) => state.ui.IncomeFormOn);
  const dispatch = useDispatch(); // Initialize useDispatch

  const ExpenseFormToggle = () => {
    dispatch(uiActions.ExpenseFormSwitch()); // Dispatch the action using the action creator
  };
  const DepositeFormToggle = () => {
    dispatch(uiActions.AddFormSwitch()); // Dispatch the action using the action creator
  };
  const IncomeFormToggle = () => {
    dispatch(uiActions.IncomeFormSwitch()); // Dispatch the action using the action creator
  };

  return (
    <main className={classes.grid}>
      {ExpenseFormOn && <ExpenseForm onCancelClick={ExpenseFormToggle} />}
      {AddFormOn && <DepositForm onCancelClick={DepositeFormToggle} />}
      {IncomeFormOn && <IncomeForm onCancelClick={IncomeFormToggle} />}
      <NavigationBar />
      <div className={classes.outlet}>
        <div className={classes.container}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
