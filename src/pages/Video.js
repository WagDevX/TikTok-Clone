import React, { useRef, useState, useEffect } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSideBar from "./components/sidebar/VideoSideBar";

import "./video.css";
import { debounce } from "lodash";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);

  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  useEffect(() => {
    const handleScrollDebounced = debounce(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setPlay(false);
      }
    }, 500);

    window.addEventListener("keydown", handleScrollDebounced);
    window.addEventListener("wheel", handleScrollDebounced);
    window.addEventListener("touchmove", handleScrollDebounced);

    return () => {
      window.removeEventListener("keydown", handleScrollDebounced);
      window.addEventListener("wheel", handleScrollDebounced);
      window.addEventListener("touchmove", handleScrollDebounced);
    };
  }, []);

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}
      ></video>
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
