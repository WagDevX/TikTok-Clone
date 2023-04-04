import React, { useState } from 'react'
import "./videoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import ShareBox from "../../components/sharebox/ShareBox"

function VideoSideBar({likes, messages, shares}) {

    const [liked, setLiked] = useState(false)

    const [showBox, setShowBox] = useState(false);
    
    function handdleLike(){
        setLiked(!liked)
    }

    function handleShare() {
        setShowBox(true);
      }


  return (
    <div className='videoSidebar'>
        <div 
            className='videoSidebar_options'
            onClick={handdleLike}
        >
            { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/> }
            
            <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar_options'>
            <ChatIcon fontSize='large'/>
            <p>{ messages }</p>
        </div>
        <div className='videoSidebar_options'>
            <ShareIcon fontSize='large'onClick={handleShare}/>
            <p>{ shares }</p>
            {showBox && <ShareBox onClose={() => setShowBox(false)} />}
        </div>
    </div>
  )
}

export default VideoSideBar;