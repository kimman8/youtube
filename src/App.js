import React, { useState, useEffect } from 'react';
import VideoGrid from './components/VideoGrid';
import Search from './components/Search';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDdsHagWL1nEhIjJLPQDnH8S4iwI7-kpYE`
      );
      console.log(result.data.items);
      setItems(result.data.items);
      setIsLoading(false);
      console.log(query);
    };
    fetchItems();
  }, [query]);
  return (
    <div>
      <Search getQuery={(q) => setQuery(q)} />
      <VideoGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
