import React from 'react';
import { NavLink } from "react-router-dom";

export default (props) => {
  const className = ['workPanel'];
  if (props.right) {
    className.push('right');
  }

  return <div className={ className.join(' ') }>
    <div className='content col-md-12 col-lg-5'>
      {props.children}
    <NavLink className='seeCaseStudy' to='/work1'>See case study &gt;</NavLink>
    </div>
    <div className='image col-md-12 col-lg-7'>
      <div className={ props.backgroundStyle }>
      </div>
    </div>
  </div>;
}
