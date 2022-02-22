import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import VideoCard from '../VideoCard/VideoCard';
import './VideoGrid.css';
import { Link } from 'react-router-dom';

const VideoGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='recommendedVideos'>
      <div className='recommendedVideos__videos'>
        {items.map((item) => (
          <Link to={`/VideoPlay/${item.id.videoId}`}>
            <VideoCard key={item.id.videoId} item={item}></VideoCard>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
