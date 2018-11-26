import React from 'react';
import { NavLink } from "react-router-dom";

export default (props) => {
  const { prev, next } = props;

  return (
    <div className='projectNav'>
      <div className='col-6'>
        <div className='link'>
        <NavLink to={ prev.href }>&lt; Previous Project</NavLink>
        </div>
        <div className='hide_mobile'>
          <NavLink to={ prev.href }>
            <div className={'thumb '+prev.className}>
              <img src={prev.imgUrl} data-rjs="2"/>
            </div>
            <div className='workPanelCategory'>{prev.category}</div>
            <div className='workPanelTitle'>{prev.title}</div>
          </NavLink>
        </div>
      </div>
      <div className='col-6 text-right'>
        <div className='link'>
          <NavLink to={ next.href }>Next Project &gt;</NavLink>
        </div>
        <div className='hide_mobile'>
          <NavLink to={ next.href }>
            <div className={'thumb '+next.className}>
              <img src={next.imgUrl} data-rjs="2"/>
            </div>
            <div className='workPanelCategory'>{next.category}</div>
            <div className='workPanelTitle'>{next.title}</div>
          </NavLink>
        </div>
      </div>
    </div>);
}
