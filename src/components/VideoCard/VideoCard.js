import React from 'react';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';

function VideoCard({ item }) {
  return (
    <div className='videoCard'>
      <img src={item.snippet.thumbnails.medium.url} alt='' />
      <div className='videoCard__info'>
        {/* <Avatar
          className='videoCard__avatar'
          alt={channel}
          src={channelImage}
        /> */}
        <div className='videoCard__text'>
          <h1>{item.snippet.title}</h1>
          <h4>{item.snippet.channelTitle}</h4>
          {/* <p>{channel}</p> */}
          {/* <p>
            {views}.{timestamp}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
