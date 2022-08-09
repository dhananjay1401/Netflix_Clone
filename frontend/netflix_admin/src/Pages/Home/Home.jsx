import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Charts from "../../Components/Charts/Charts";
import Featuredinfo from "../../Components/Featuredinfo/Featuredinfo";
import WidgetsLg from "../../Components/WidgetsLg/WidgetsLg";
import WidgetsSm from "../../Components/WidgetsSm/WidgetsSm";
import "./Home.css";
function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQ1YzIzMDA0MWFlZWQyYjI2M2Q5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDAzOTUxNSwiZXhwIjoxNjYwNDcxNTE1fQ.1x7YWZEIEMwtjDQtq11bDVXXvcz5QR5tiBAY63imhCI",
          },
        });
        const statsList =res.data.sort(function (a,b){
          return a._id - b._id
        })

        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <>
      <div className="home">
        <Featuredinfo />
        <Charts data={userStats} title="User Analytics" grid dataKey="New User" />
        <div className="homeWidgets">
          <WidgetsSm />
          <WidgetsLg />
        </div>
      </div>
    </>
  );
}

export default Home;
 