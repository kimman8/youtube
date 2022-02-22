import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';

import SidebarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Link to='/'>
        <SidebarRow selected Icon={HomeIcon} title='Home' />
      </Link>
      <SidebarRow Icon={WhatshotIcon} title='Trending' />
      <SidebarRow Icon={SubscriptionsIcon} title='Subscription' />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title='Library' />
      <SidebarRow Icon={HistoryIcon} title='History' />
      <SidebarRow Icon={WatchLaterIcon} title='Watch Later' />
      <SidebarRow Icon={DownloadIcon} title='Downloads' />
      <Link to='/likedvideos'>
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked videos' />
      </Link>
      <hr />
    </div>
  );
}

export default Sidebar;
