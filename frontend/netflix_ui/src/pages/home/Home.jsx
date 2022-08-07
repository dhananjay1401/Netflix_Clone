import React from "react";
import "./Home.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Navbar } from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
export const Home = ({type}) => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type={type} />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />

        {/* <img 
        weidth="100%"
        src = "https://images.unsplash.com/photo-1616928296082-defb515b2c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt='' />     */}
      </div>
    </>
  );
};
