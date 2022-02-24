import React, { useEffect } from 'react';
import './VideoPlay.css';
import NProgress from 'nprogress';
import '../../styles/nprogress.css';

function VideoPlay({ addLikedVideo, deleteLikedVideo }) {
  const ID = window.location.href.slice(-11);
  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, []);
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
      <button onClick={() => addLikedVideo(ID)}>ADD TO PLAYLIST</button>
      <button onClick={() => deleteLikedVideo(ID)}>REMOVE FROM PLAYLIST</button>
    </div>
  );
}

export default VideoPlay;
