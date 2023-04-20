import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './ProfileClass';

const About = () => {
  return (
    <>
      <div>About</div>
      <Outlet />
      <Profile/>
    </>
  )
}

export default About