import React, { useState, useEffect } from 'react';
// import { GlobalContext } from './context/GlobalState';
import { GlobalProvider } from './context/GlobalState';
import './styles/nprogress.css';
import NProgress from 'nprogress';
import './App.css';
import VideoGrid from './components/VideoGrid/VideoGrid';
import VideoPlay from './components/VideoPlay/VideoPlay';
import axios from 'axios';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Sidenav from './components/Sidenav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LikedVideos from './components/LikedVideos/LikedVideos';
const API_KEY = process.env.REACT_APP_API_KEY1;

const App = () => {
  // const { addingLikedVideo } = useContext(GlobalContext);

  const loader = () => {
    NProgress.start();
    NProgress.done();
  };

  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [likedVideos, setLikedVideos] = useState([]);
  useEffect(() => {
    if (window.screen.width < 600) {
      setToggle(!toggle);
      console.log('hi');
    }
  }, [window.screen.width]);
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
    NProgress.start();

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
    NProgress.done();
  };
  const deleteLikedVideo = async (ID, likedVideo) => {
    NProgress.start();

    await fetch(`http://localhost:8000/likedVideos/${ID}`, {
      method: 'DELETE',
    });

    setLikedVideos(likedVideos.filter((likedVideo) => likedVideo.id !== ID));
    NProgress.done();
  };
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=25`
      );
      setItems(result.data.items);
    };
    fetchItems();
  }, [query]);
  return (
    <GlobalProvider>
      <div className='app'>
        <BrowserRouter>
          <Sidenav handleToggle={handleToggle} toggle={toggle} />
          <Header
            getQuery={(q) => setQuery(q)}
            loader={loader}
            handleToggle={handleToggle}
          />
          <Routes>
            <Route
              path='/'
              element={
                <div className='app__page'>
                  {toggle && (
                    <Sidebar loader={loader} handleToggle={handleToggle} />
                  )}
                  <VideoGrid items={items} addLikedVideo={addLikedVideo} />
                </div>
              }
            />
            <Route
              path='/likedvideos'
              element={
                <div className='app__page'>
                  {toggle && (
                    <Sidebar loader={loader} handleToggle={handleToggle} />
                  )}
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
                  {toggle && (
                    <Sidebar loader={loader} handleToggle={handleToggle} />
                  )}
                  <VideoPlay
                    addLikedVideo={addLikedVideo}
                    deleteLikedVideo={deleteLikedVideo}
                  />
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
