import StatusBar from "../componants/Navigation/StatusBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <StatusBar />
      </header>
      <div id="overlays"></div>
      <body id="main-body">
        <Outlet />
      </body>
    </>
  );
};
export default Root;
