import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Header({ getQuery, loader, handleToggle }) {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon onClick={handleToggle} className='header__left__icon' />
        <Link to='/' onClick={loader}>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            alt=''
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          type='text'
          placeholder='Search'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <SearchIcon className='header__inputButton' />
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt='Kim Yuen'
          src='https://avatars.githubusercontent.com/u/40331446?s=96&v=4'
        />
      </div>
    </div>
  );
}

export default Header;
