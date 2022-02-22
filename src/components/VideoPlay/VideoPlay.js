import React from 'react';
import './VideoPlay.css';
import { useParams, useNavigate } from 'react-router-dom';

function VideoPlay() {
  const navigate = useNavigate();
  const params = useParams();
  const ID = window.location.href.slice(-11);

  return (
    <div className='videoPlay'>
      <iframe
        src={`https://www.youtube.com/embed/${ID}`}
        frameborder='0'
        title='MY VID '
        allowFullScreen
        width='100%'
        height='100%'
      ></iframe>
    </div>
  );
}

export default VideoPlay;
