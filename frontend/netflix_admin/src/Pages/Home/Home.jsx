import React from "react";
import Charts from "../../Components/Charts/Charts";
import Featuredinfo from "../../Components/Featuredinfo/Featuredinfo";
import WidgetsLg from "../../Components/WidgetsLg/WidgetsLg";
import WidgetsSm from "../../Components/WidgetsSm/WidgetsSm";
import { userData } from "../../dummydata";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home">
        <Featuredinfo />
        <Charts title="User Analytics" data={userData} grid datakey="User" />
        <div className="homeWidgets">
          <WidgetsSm />
          <WidgetsLg />
        </div>
      </div>
    </>
  );
}

export default Home;
