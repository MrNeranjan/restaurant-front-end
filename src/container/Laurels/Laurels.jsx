import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { awards } from '../../constants/data';
import { laurels } from '../../constants/images';

const Laurels = () => {

  function Card({imgUrl,title,subtitle}) {
    return  (
      <div className='card_container'>
        <div className='card_container_img'>
          <img src={imgUrl} alt={title} />
        </div>
        <div className='card_container_info'>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }



 return (
    <div className='awards_container app__bg section__padding'>
      <div className='awards_container_info'>
        <div className='awards_container_info_heading'>
          <SubHeading text="Awards & recognition" />
          <h1>Our Laurels</h1>
        </div>
        <div className='awards_container_info_cards'>
          {
            awards.map((award,index) => (
              <Card key={index} imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} />
            ))
          }
        </div>
      </div>
      <div className='awards_container_img'>
        <img src={laurels} alt='award_bg' className='awards_container_img_img' />
      </div>
    </div>
  );

}
  
  

export default Laurels;
