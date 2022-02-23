import React, { useState, useEffect } from 'react';
import { GlobalProvider } from './context/GlobalState';

import './App.css';
import VideoGrid from './components/VideoGrid/VideoGrid';
import VideoPlay from './components/VideoPlay/VideoPlay';
import axios from 'axios';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LikedVideos from './components/LikedVideos/LikedVideos';
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    const getLikedVideos = async () => {
      const likedVideosFromServer = await fetchLikedVideos();
      setLikedVideos(likedVideosFromServer);
    };
    getLikedVideos();
  }, []);
  const fetchLikedVideos = async () => {
    const res = await fetch('http://localhost:8000/likedVideos');
    const data = await res.json();
    return data;
  };

  const addLikedVideo = async (likedVideo) => {
    const newLikedVideo = {
      id: likedVideo,
    };
    const res = await fetch('http://localhost:8000/likedVideos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newLikedVideo),
    });
    const data = await res.json();
    setLikedVideos([...likedVideos, data]);
    console.log(data);
  };
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=2`
      );
      setItems(result.data.items);
      // setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <GlobalProvider>
      <div className='app'>
        <BrowserRouter>
          <Header getQuery={(q) => setQuery(q)} />
          <Routes>
            <Route
              path='/'
              element={
                <div className='app__page'>
                  <Sidebar />
                  <VideoGrid items={items} addLikedVideo={addLikedVideo} />
                </div>
              }
            />
            <Route
              path='/likedvideos'
              element={
                <div className='app__page'>
                  <Sidebar />
                  <LikedVideos
                    addLikedVideo={addLikedVideo}
                    likedVideos={likedVideos}
                  />
                </div>
              }
            />
            <Route
              path='/VideoPlay/:id'
              element={
                <div className='app__page'>
                  <Sidebar />
                  <VideoPlay addLikedVideo={addLikedVideo} />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
};

export default App;
