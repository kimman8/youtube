import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
import Time from '../../utils/Time';
import Views from '../../utils/Views';

function VideoCard({ item }) {
  const [stat, setStat] = useState([]);
  const [contentDeets, setContentDeets] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const statistics1 = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=AIzaSyDdsHagWL1nEhIjJLPQDnH8S4iwI7-kpYE`
      );
      const videoDuration = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${item.id.videoId}&part=contentDetails&key=AIzaSyDdsHagWL1nEhIjJLPQDnH8S4iwI7-kpYE`
      );
      setStat(statistics1);
      setContentDeets(videoDuration);
    };
    fetchItems();
  }, [item.id.videoId]);
  return (
    <div className='videoCard'>
      <img
        className='videoCard__thumbnail'
        src={item.snippet.thumbnails.medium.url}
        alt=''
      />
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={item.snippet.channelTitle}
          src={item.snippet.thumbnails.default.url}
        />
        <div className='videoCard__text'>
          <h1>{item.snippet.title}</h1>
          <h4>{item.snippet.channelTitle}</h4>
          <p>{contentDeets?.data?.items[0]?.contentDetails?.duration}</p>
          <p>
            {Views(stat?.data?.items[0]?.statistics?.viewCount)} •{' '}
            {Time(item.snippet.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
