import React from "react";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
export const Watch = () => {
  return (
    <>
      <div className="watch">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
        <video
          className="video"
          autoPlay
          progress
          controls
          src=  "https://vod-progressive.akamaized.net/exp=1657226210~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=9b4aeab5e7b4a9b7a5dca15bd3fab682c7f0d1567152aec8d1064b59f562c6b6/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4"

        />
      </div>
    </> 
  );
};
