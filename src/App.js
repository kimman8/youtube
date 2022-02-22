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

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyCDzr4Jp-WWWvTXXzpUrr7KuIU1AxpeKaE&maxResults=2`
      );
      setItems(result.data.items);
      setIsLoading(false);
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
                  <VideoGrid isLoading={isLoading} items={items} />
                </div>
              }
            />
            <Route
              path='/likedvideos'
              element={
                <div className='app__page'>
                  <Sidebar />
                  <LikedVideos />
                </div>
              }
            />
            <Route
              path='/VideoPlay/:id'
              element={
                <div className='app__page'>
                  <Sidebar />
                  <VideoPlay />
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
