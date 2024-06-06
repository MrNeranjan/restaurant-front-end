import React from 'react';


import {welcome} from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='header_container section__padding'>
    <div className='header_container_info'>
      <SubHeading text='Chase the new Flavour'/>
      <h1>The key to Fine dining</h1>
      <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type= "button">Book a table</button>
    </div>
    <div className='header_container_img'>
      <img src={welcome} alt='welcome' />
    </div>
  </div>
);

export default Header;
