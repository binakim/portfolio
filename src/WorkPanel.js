import React from 'react';
import { NavLink } from "react-router-dom";

export default (props) => {
  const className = ['workPanel row'];
  if (props.right) {
    className.push('right');
  }

  return <div className={ className.join(' ') }>
    <div className='content col-12 col-md-5'>
      {props.children}
    <NavLink className='seeCaseStudy' to='/work1'><h4>See case study &gt;</h4></NavLink>
    </div>
    <div className='image col-12 col-md-7'>
      <div className={ props.backgroundStyle }>
        <img src={ props.imagePath } data-rjs="2"/>
      </div>
    </div>
  </div>;
}
