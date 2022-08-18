import React from "react";
import "./WidgetsSm.css";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function WidgetsSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQ1YzIzMDA0MWFlZWQyYjI2M2Q5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDg0MzU4NywiZXhwIjoxNjYxMjc1NTg3fQ.3bCfYUQko6JZhYQ9Ude1DebRBHsiKYE8qWtOruxlZlo",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <>
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default WidgetsSm;
