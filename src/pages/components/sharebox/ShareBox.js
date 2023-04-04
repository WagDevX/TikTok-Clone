import React from "react";
import "./sharebox.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

function ShareBox({ title, url, onClose }) {
  const share = () => {
    navigator.share({ title: title, url: url });
  };

  const closeShareBox = () => {
    const shareBox = document.querySelector(".share-box");
    shareBox.classList.add("para-sair");
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="share-box">
      <div className="share-box-text" onClick={share}>
        <p>
          <ArrowForwardIosIcon onClick={closeShareBox} />
        </p>
        <p>
          <RedditIcon fontSize="large" />
        </p>
        <p>
          <TwitterIcon fontSize="large" />
        </p>
        <p>
          <MailIcon fontSize="large" />
        </p>
        <p>
          <WhatsAppIcon fontSize="large" />
        </p>
        <p>
          <InstagramIcon fontSize="large" />
        </p>
        <p>
          <SendIcon fontSize="large" />
        </p>
      </div>
      <div className="para-sair" onClick={onClose}></div>
    </div>
  );
}

export default ShareBox;
