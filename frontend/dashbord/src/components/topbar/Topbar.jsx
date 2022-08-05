import { NotificationsNone } from "@mui/icons-material";
import React from "react";
import "./topba.css";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topleft">
            <span className="logo">Dashbord</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              {/* <NotificationsNone /> */}
            <NotificationsOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
