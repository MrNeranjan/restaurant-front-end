import React from 'react';

import './AboutUs.css';
import { SubHeading } from '../../components';
import {knife}from '../../constants/images';

const AboutUs = () => (
  <div className='app__bg section__padding about_container'>
    <div className='aboutus__container'>
      <SubHeading text='About Us' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et</p>
      <button type='button'>Read More</button>
    </div>
    <div className='knife_image'>
      <img src={knife} alt='knife' />
    </div>
    <div className='History__container'>
      <SubHeading text='Our History' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et</p>
      <button type='button'>Read More</button>
    </div>
  </div>
);

export default AboutUs;
