import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";


function Video() {
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

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
      ></video>
      {/* Side bar */}
      <VideoFooter />
    </div>
  );
}

export default Video;
