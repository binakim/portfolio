import React from 'react';
import { NavLink } from "react-router-dom";

export default (props) => {
  const className = ['workPanel row'];
  if (props.right) {
    className.push('right');
  }

  return <div className={ className.join(' ') }>
    <div className='content col-lg-12 col-xl-5 order-lg-2'>
      {props.children}
    <NavLink className='seeCaseStudy' to='/work1'>See case study &gt;</NavLink>
    </div>
    <div className='image col-lg-12 col-xl-7 order-lg-1'>
      <div className={ props.backgroundStyle }>
      </div>
    </div>
  </div>;
}
