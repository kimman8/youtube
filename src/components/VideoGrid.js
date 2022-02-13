import React from 'react';
import Spinner from './Spinner';
import VideoItem from './VideoItem';

const VideoGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section>
      {items.map((item) => (
        <VideoItem key={item.id.channelId} item={item}></VideoItem>
      ))}
    </section>
  );
};

export default VideoGrid;
