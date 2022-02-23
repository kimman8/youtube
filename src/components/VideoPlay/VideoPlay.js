import React from 'react';
import './VideoPlay.css';

function VideoPlay({ addLikedVideo, tester }) {
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
      <button onClick={() => addLikedVideo(ID)}>Add to Playlist</button>
    </div>
  );
}

export default VideoPlay;
