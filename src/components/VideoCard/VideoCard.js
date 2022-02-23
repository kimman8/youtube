import React, { useState, useEffect } from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
import Time from '../../utils/Time';
import Views from '../../utils/Views';
const API_KEY = process.env.REACT_APP_API_KEY;

function VideoCard({ item }) {
  const [stat, setStat] = useState([]);
  const [contentDeets, setContentDeets] = useState([]);
  const [videoIDs, setVideoIDs] = useState(['hi']);
  const [liked, setLiked] = useState(true);
  const addVideos = () => {
    if (liked) {
      videoIDs.push(item.id.videoId);
    } else {
      videoIDs.pop(item.id.videoId);
    }
    // console.log(videoIDs);
    // console.log(item.id.videoId);
    setLiked(!liked);
    console.log(videoIDs);
    setVideoIDs(videoIDs);
  };

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
    <div className='videoCard'>
      {/* <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
        <img
          className='videoCard__thumbnail'
          src={item.snippet.thumbnails.medium.url}
          alt=''
        />
      </a> */}
      <img
        className='videoCard__thumbnail'
        src={item.snippet.thumbnails.medium.url}
        alt=''
      />
      {/* <button className='videoCard__duration'>
        {contentDeets?.data?.items[0]?.contentDetails?.duration
          .substring(2)
          .slice(0, -1)
          .replace(/M/g, ':')
          .replace(/H/g, ':')}
      </button> */}
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={item.snippet.channelTitle}
          src={item.snippet.thumbnails.default.url}
        />
        <div className='videoCard__text'>
          <h4>{item.snippet.title}</h4>
          <p>{item.snippet.channelTitle}</p>

          <p>
            {Views(stat?.data?.items[0]?.statistics?.viewCount)} •{' '}
            {Time(item.snippet.publishedAt)}
          </p>
        </div>
        {liked ? (
          <ThumbUpAltOutlinedIcon
            className='videoCard__like'
            onClick={addVideos}
          />
        ) : (
          <ThumbDownOffAltIcon
            className='videoCard__like'
            onClick={addVideos}
          />
        )}
      </div>
    </div>
  );
}

export default VideoCard;
