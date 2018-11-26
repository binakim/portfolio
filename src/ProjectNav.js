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
          <div className={'thumb '+prev.className}>
            <img src={prev.imgUrl} data-rjs="2"/>
          </div>
          <div className='workPanelCategory'>{prev.category}</div>
          <div className='workPanelTitle'>{prev.title}</div>
        </div>
      </div>
      <div className='col-6 text-right'>
        <div className='link'>
          <NavLink to='/project-d'>Next Project &gt;</NavLink>
        </div>
        <div className='hide_mobile'>
          <div className='thumb gd2'>
            <img src='assets/p2.png' data-rjs="2"/>
          </div>
          <div className='workPanelCategory'>UI / UX Design</div>
          <div className='workPanelTitle'>Social Table</div>
        </div>
      </div>
    </div>);
}
