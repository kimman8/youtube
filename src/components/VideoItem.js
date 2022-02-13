import React from 'react';

const VideoItem = ({ item }) => {
  return (
    <div>
      <h1>{item.snippet.title}</h1>
      <img src={item.snippet.thumbnails.medium.url} alt='' />
      <p>{item.snippet.channelTitle}</p>
    </div>
  );
};

export default VideoItem;
