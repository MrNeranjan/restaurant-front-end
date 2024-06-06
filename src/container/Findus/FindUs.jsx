import React from 'react';
import './FindUs.css';
import {findus} from '../../constants/images';
import {SubHeading} from '../../components';


const FindUs = () => (
  <div className='findus_container section__padding app__bg'>
    <div className='findus_container_info'>
      <SubHeading text='Contact' />
      <h1>Find Us</h1>
      <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <h2>Opening Hours</h2>
      <p>Mon - Fri: 10:00 am - 02:00 am</p>
      <p>Sat - Sun: 10:00 am - 03:00 am</p>
      <button type='button'>Visit Us</button>
    </div>
    <div className='findus_container_imge'>
      <img src={findus} alt='imge'/>
    </div>
    
  </div>
);

export default FindUs;
