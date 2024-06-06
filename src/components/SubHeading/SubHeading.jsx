import React from 'react';
import { spoon } from '../../constants/images';

function SubHeading({ text }) {
  return (
    <div>
      <h2 style={{fontFamily: 'var(--font-base)', color:"var(--color-white)"}}>{text}</h2>
      <img src={spoon} alt="spoon" className='spoon__img'/>
    </div>
  );
}
export default SubHeading;
