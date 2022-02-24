import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import './styles/nprogress.css';
import Sidebar from './components/Sidebar/Sidebar';
import VideoGrid from './components/VideoGrid/VideoGrid';
import LikedVideos from './components/LikedVideos/LikedVideos';
import VideoPlay from './components/VideoPlay/VideoPlay';

function Roots({ addLikedVideo, items, likedVideos }) {
  let location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location.pathname]);
  return (
    <Route>
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
    </Route>
  );
}

export default Roots;
