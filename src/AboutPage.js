import React from 'react';

import './AboutPage.scss';

export default () => {
  return <div className='aboutPage'>
    <div className='profile'>
      <div className='profilePhoto col-12 col-md-5'>
        <img src='assets/about1.jpg' data-rjs="2" />
      </div>
      <div className='hide_mobile col-md-1' />
      <div className='statementSection col-12 col-md-6'>
        <div className='d-flex flex-grow-1 align-items-center justify-content-center justify-content-md-start'>
          <div className='statement'>
            <img className='quote-l' src='assets/Quotation1.png' data-rjs='2'/>I'm not just a <span className='highlight'>problem-solving</span> designer. I can <span className='highlight'>create</span> something that <span className='highlight'>inspires people</span> with new <span className='highlight'>experiences</span>.<img src='assets/Quotation2.png' className='quote-r' data-rjs='2'/>
          </div>
        </div>
        <div className='resumeButton'>
          <a href="https://drive.google.com/file/d/1bfHYzu_jfNnr5gxd27e3AAs5GlWe-OMV/view" target="new">
          <button type='button' className='btn'>RESUME &gt;</button>
          </a>
        </div>
      </div>
    </div>
    <div className='bio'>
      <div className='col-12 col-lg-6'>
        <div className='sectionCol'>
          <span className='section'>EXPERIENCE</span>
          <div className='exp'>
            <div className='title'><span className='company'>Hyundai Card</span> Senior Product Designer</div>
            <div className='period'>July 2014 - May 2017</div>
            <div className='description'>Conducted Fintech product strategies, designed responsive websites and mobile app.</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>Korea Telecom</span> Senior Product Designer</div>
            <div className='period'>April 2012 - June 2014</div>
            <div className='description'>Designed a camera app and a music streaming app.</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>SK Communications</span> Product Designer</div>
            <div className='period'>January 2006 - December 2010</div>
            <div className='description'>Developed the largest social nework service in South Korea. Designed photo editor</div>
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-6'>
        <div className='sectionCol'>
          <span className='section'>EDUCATION</span>
          <div className='exp'>
            <div className='title'><span className='company'>Academy of Art University</span> San Francisco, CA</div>
            <div className='description'>Master of Arts / Web Design & New Media (Fall 2018)</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>Hanyang University</span> Seoul, Korea</div>
            <div className='description'>Bachelor of Fine Arts / Visual Design (Spring 2006)</div>
          </div>
        </div>
        <div className='sectionCol'>
          <span className='section'>SKILLS</span>
          <div className='exp'>
            <div className='description'>Sketch, Flinto, Invision, Adobe XD / Illustrator / Photoshop / Indesign / After effect</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
