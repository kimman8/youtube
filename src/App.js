import React, { useState, useEffect } from 'react';
import './App.css';
import VideoGrid from './components/VideoGrid/VideoGrid';
import axios from 'axios';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';

const App = () => {
  const [items, setItems] = useState([]);
  const [ids, setIds] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDdsHagWL1nEhIjJLPQDnH8S4iwI7-kpYE`
      );
      setItems(result.data.items);
      setIsLoading(false);
      console.log(query);
    };
    fetchItems();
  }, [query]);
  return (
    <div className='app'>
      <Header getQuery={(q) => setQuery(q)} />
      <div className='app__page'>
        <Sidebar />
        {/* <RecommendedVideos /> */}
        <VideoGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  );
};

export default App;
