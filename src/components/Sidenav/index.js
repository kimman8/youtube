import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SidebtnWrap,
} from './SidenavElements';

const Sidenav = ({ toggle, handleToggle }) => {
  return (
    <SidebarContainer toggle={toggle} onClick={handleToggle}>
      <Icon onClick={handleToggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='team' onClick={toggle}>
            Team
          </SidebarLink>
          <SidebarLink to='news' onClick={toggle}>
            News
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to='/signin'>Book a session</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidenav;
