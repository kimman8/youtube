import React from 'react';
import LikedVideosCount from '../LikedVideosCount/LikedVideosCount';
import './SidebarRow.css';

function SidebarRow({ selected, Icon, title, likedVideos }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className='sidebarRow__icon' />
      <h2 className='sidebarRow__title'>{title}</h2>
      {title === 'Liked videos' && (
        <LikedVideosCount count={likedVideos.length} />
      )}
    </div>
  );
}

export default SidebarRow;
