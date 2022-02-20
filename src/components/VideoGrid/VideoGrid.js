import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import VideoCard from '../VideoCard/VideoCard';

const VideoGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        {items.map((item) => (
          <VideoCard key={item.id.videoId} item={item}></VideoCard>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
