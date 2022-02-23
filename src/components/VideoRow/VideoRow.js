import React, { useState, useEffect } from 'react';
import './VideoRow.css';
import Time from '../../utils/Time';
import Views from '../../utils/Views';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

function VideoRow({ item }) {
  const [stat, setStat] = useState([]);
  const [contentDeets, setContentDeets] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const statistics1 = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${API_KEY}`
      );
      const videoDuration = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${item.id.videoId}&part=contentDetails&key=${API_KEY}`
      );
      setStat(statistics1);
      setContentDeets(videoDuration);
    };
    fetchItems();
  }, [item.id.videoId]);
  return (
    <div className='videoRow'>
      <img
        className='videoRow__thumbnail'
        src={item.snippet.thumbnails.medium.url}
        alt=''
      />
      <Avatar
        className='videoRow__logo'
        alt={item.snippet.channelTitle}
        src={item.snippet.thumbnails.default.url}
      />
      <div className='videoRow__text'>
        <h4>{item.snippet.title}</h4>
        <p>{item.snippet.channelTitle}</p>

        <p>
          {Views(stat?.data?.items[0]?.statistics?.viewCount)} •{' '}
          {Time(item.snippet.publishedAt)}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
