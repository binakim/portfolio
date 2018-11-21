import React from 'react';
import { NavLink } from "react-router-dom";

export default (props) => {
  const alignment = '' ? props.right : 'right';

  return <div className='workPanel'>
    <div className='order-2 order-md-1 col-10 col-md-5'>
      <div className={['workDescription', alignment].join(' ')}>
        {props.children}
      </div>
      <div className='workPanelSeeCaseStudy'>
        <NavLink to='/work1'>See case study &gt;</NavLink>
      </div>
    </div>
    <div className='order-1 order-md-2 xs-s-fullWidth'>
      <div className='col-12 col-md-7'>
        <div className={ ['workPanelImage',props.backgroundStyle].join(' ') }>
          <img src={ props.imagePath } data-rjs="2"/>
        </div>
      </div>
    </div>
  </div>
}
