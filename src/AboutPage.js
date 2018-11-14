import React from 'react';

import CenteredPage from './CenteredPage';
import WorkPanel from './WorkPanel';

export default () => {
  return <div className='container'>
    <div className='row'>
      <div className='myphoto col-md-12 col-lg-5'>
        <img src='assets/about1.jpg' />
      </div>
      <div className='col-md-12 col-lg-7'>
        <div className='statement'>
          I'm not just a problem-solving designer. I can creating something that inspires people with new experience.
        </div>
        <div className='resume'>
        <button type='button' class='btn'>RESUME &gt;</button>
        </div>
      </div>
    </div>
    <div className='row bio'>
      <div className='col-lg-6'>
        <span className='title'>EXPERIENCE</span>
        <div className='exp'>
          <h4><span className='company'>Hyundai Card</span> Senior Product Designer</h4>
          <h6>July 2014 - May 2017</h6>
          <h5>Conducted Fintech product strategies, designed responsive websites and mobile app.</h5>
        </div>
        <div className='exp'>
          <h4><span className='company'>Korea Telecom</span> Senior Product Designer</h4>
          <h6>April 2012 - June 2014</h6>
          <h5>Designed a camera app and a music streaming app.</h5>
        </div>
        <div className='exp'>
          <h4><span className='company'>SK Communications</span> Product Designer</h4>
          <h6>January 2006 - December 2010</h6>
          <h5>Developed the largest social nework service in South Korea. Designed photo editor</h5>
        </div>
      </div>
      <div className='col-lg-6'>
        <span className='title'>EDUCATION</span>
        <div className='exp'>
          <h4><span className='company'>Academy of Art University</span> San Francisco, CA</h4>
          <h5>Master of Arts / Web Design & New Media (Fall 2018)</h5>
        </div>
        <div className='exp'>
          <h4><span className='company'>Hanyang University</span> Seoul, Korea</h4>
          <h5>Bachelor of Fine Arts / Visual Design (Spring 2006)</h5>
        </div>
        <span className='title'>SKILLS</span>
        <div className='exp'>
          <h5>Sketch, Flinto, Invision, Adobe XD / Illustrator / Photoshop / Indesign / After effect</h5>
        </div>
      </div>
    </div>
  </div>
}
