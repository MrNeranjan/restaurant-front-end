import React, { useState, useRef } from "react";
import "./Intro.css";
import { meal } from "../../constants/index";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [play, setPlay] = useState(true);
  const vidRef = useRef(null);

  return (
    <div className="video_container section__padding">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        autoPlay
        muted
        loop
        id="myVideo"
      />
      <div
        className="video_controls"
        onClick={() => {
          if (play) {
            vidRef.current.play();
          } else {
            vidRef.current.pause();
          }
          setPlay(!play);
        }}
      >
        {play ? <BsFillPlayFill /> : <BsPauseFill />}
      </div>
    </div>
  );
};

export default Intro;
