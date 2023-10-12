import { NavLink ,useParams} from 'react-router-dom';
import { useDispatch ,useSelector} from "react-redux";
import { userActions } from "../Auth/AuthState";
import classes from './StatusBar.module.css';
import {FaRegUserCircle} from "react-icons/fa"


function StatusBar() {
  const Dispatch = useDispatch();
  const userName = useSelector((state)=> state.user.displayName);
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
const logout = ()=>{
  Dispatch(userActions.logout());
}


  return (
    <nav className={classes.header}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/Home"
              className={(({ isActive }) =>
                isActive ? classes.active : undefined) + ' ' +classes.nameDisplay 
              }
              end
            >{isLoggedIn?<FaRegUserCircle/>:undefined}
              {isLoggedIn? <l>{userName}</l>:"Home"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={isLoggedIn?`${userName}/budget_manager`:"/Home"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Budget Manager
            </NavLink>
          </li>
          <li>
            <NavLink to="Auth?mode=login" onClick={logout} className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>{isLoggedIn? "logout":"login"}</NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default StatusBar;