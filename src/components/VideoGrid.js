import React from 'react';
import Spinner from './Spinner';
import VideoCard from './VideoCard/VideoCard';

const VideoGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section>
      {items.map((item) => (
        <VideoCard key={item.id.channelId} item={item}></VideoCard>
      ))}
    </section>
  );
};

export default VideoGrid;
