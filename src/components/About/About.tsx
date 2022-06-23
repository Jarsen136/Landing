import React from 'react';
import { ReactComponent as Img } from '../../assets/img/img0.svg';
import Button from '../Base/Button/Button'
import './style.scss';


function AboutUs() {

  return (
    <div className="about-us">
      <header className="about-us-header">
        <span>About Us</span>
        <div className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </header>

      <div className="about-us-content">
        <div className='about-us-content-left'>
          <Img className="img" />
        </div>
        <div className="about-us-content-right">
          <span className="title">Get Popular NFT</span>
          <div className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </div>
          <Button customClassName='show-button' text="Show more" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
