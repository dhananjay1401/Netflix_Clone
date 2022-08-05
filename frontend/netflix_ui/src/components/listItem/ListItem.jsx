import React from "react";
import { useState } from "react";
import "./listItem.scss";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
  "https://vod-progressive.akamaized.net/exp=1657226210~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=9b4aeab5e7b4a9b7a5dca15bd3fab682c7f0d1567152aec8d1064b59f562c6b6/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>        
      <video src= {trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowOutlinedIcon className="icon"/>
          <AddOutlinedIcon className="icon" />
          <ThumbUpOutlinedIcon className="icon" />
           <ThumbDownAltOutlinedIcon className="icon" />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          corrupti?
        </div>
        <div className="genre">Action</div>
      </div>
      </>
     )}
    </div>
  );
};

export default ListItem;
