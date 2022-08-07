import React, { useState , useEffect } from "react";
import "./Home.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Navbar } from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";
export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        console.log(res)
        // setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

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
