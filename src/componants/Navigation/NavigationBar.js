import { NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import {GrOverview,GrBraille,GrHistory,GrSettingsOption} from "react-icons/gr"

export default function NavigationBar() {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
          <NavLink
            to=""
            className={({ isActive }) =>
            isActive ? classes.active + " " +classes.link : classes.link
          }
          end
          >
          <GrOverview/>
                Overview
          </NavLink>
          <NavLink
            to="categories"
            className={({ isActive }) =>
            isActive ? classes.active+ " " +classes.link : classes.link
          }
          > 
          <GrBraille />
           Categories
          </NavLink>
        
          <NavLink
            to="history"
            className={({ isActive }) =>
              isActive ? classes.active+ " " +classes.link : classes.link
            }
            > 
            <GrHistory/>
           History
          </NavLink>
      
        
          <NavLink
            to="settings"
            className={({ isActive }) =>
            isActive ? classes.active+ " " +classes.link : classes.link
          } 
          >
            <GrSettingsOption/>
               settings
          </NavLink>
        
      </div>
    </div>
  );
}
