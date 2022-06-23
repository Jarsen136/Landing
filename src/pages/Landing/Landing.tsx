import React from 'react';
import AboutUs from '../../components/About/About';
import Brands from '../../components/Brands/Brands';
import Cover from '../../components/Cover/Cover';

function Landing() {
  return (
    <div className="Landing">
      <Cover />
      <Brands />
      <AboutUs />
    </div>
  );
}

export default Landing;
