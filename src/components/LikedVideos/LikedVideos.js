import React, { useState, useEffect } from 'react';
import '../../styles/nprogress.css';
import NProgress from 'nprogress';
import { Link } from 'react-router-dom';
import './LikedVideos.css';
import VideoCard from '../VideoCard/VideoCard';
import axios from 'axios';
import VideoRow from '../VideoRow/VideoRow';
const API_KEY = process.env.REACT_APP_API_KEY2;

function LikedVideos({ likedVideos }) {
  const [items, setItems] = useState([]);
  let idString = '';
  const turnArrayIntoString = () => {
    for (let i = 0; i < likedVideos.length; i++) {
      idString = idString.concat(i === 0 ? '' : ',', likedVideos[i].id);
    }
    return idString;
  };
  const clearLocalStorage = () => {
    NProgress.start();
    localStorage.clear();
    // window.location.reload();
    NProgress.done();
  };
  console.log(turnArrayIntoString());
  console.log(likedVideos[0].id);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${idString}&key=${API_KEY}`
      );
      setItems(result.data.items);
    };
    fetchItems();
  }, []);
  return (
    <div className='likedVideos'>
      <h3>Liked videos</h3>
      <p>{items.length} videos</p>
      <hr />
      <div className='likedVideos__rows'>
        {items.map((likedVideo) => (
          <Link to={`/VideoPlay/${likedVideo.id}`}>
            <VideoRow key={likedVideo.id} item={likedVideo}></VideoRow>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LikedVideos;
