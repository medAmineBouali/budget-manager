import classes from "./HomePage.module.css";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const HomePage = () => {
  const userName = useSelector((state) => state.user.displayName);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div className={classes.background}>
      <div className={classes.card}>
        {isLoggedIn ? (
          <h1>Home Page</h1>
        ) : (<h1 className={classes.welcomeText}>
          Welcome to your budget manager {userName}!
        </h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
