import LineChartComponent from "../../componants/Charts/TimeChart";
import WheelChart from "../../componants/Charts/WheelChart";
import { useSelector } from "react-redux";
import classes from "./Overview.module.css";
import UserCard from "../../componants/UserCard";

const Overview = () => {
  const userData = useSelector((state) => state.data);

  return (
    <div className={classes.grid}>
      <div className={classes.section1}>
        <div className={classes.borderedcontainer}>
          <UserCard />
        </div>
        <div className={classes.columncontainer}>
          <label style={{ justifySelf: "flex-start" }}>Expense history</label>
          <LineChartComponent data={userData} />
        </div>
      </div>
      <div className={classes.columncontainer}>
        <label>Categorie Ratio %</label>
        <div style={{ margin: "4rem 0rem" }}>
          <WheelChart data={userData} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
