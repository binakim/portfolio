import React from 'react';

import CenteredPage from './CenteredPage';
import WorkPanel from './WorkPanel';

export default () => {
  return <div>
    <div class='vgap'/>
    <CenteredPage className='centerPage'> 
      <p><h2>Hello, I'm <span className='highlight'>Bina Kim</span>.</h2></p>
      <p><h2>A <span className='highlight'>product designer</span></h2></p>
      <p><h2>who <span className='highlight'>designs</span> delightful</h2></p>
      <p><h2><span className='highlight'>User Experience</span>.</h2></p>
    </CenteredPage>
    <div class='vgap'/>
    <WorkPanel backgroundStyle='gd1' imagePath='assets/p1.png'>
      <h5>UI / UX Design</h5>
      <h1>I was here</h1>
      <h4>An application that helps travelers to easily record their trips and manage their travel budget using their credit card.</h4>
    </WorkPanel>
    <div class='vgap'/>
    <WorkPanel backgroundStyle='gd2' imagePath='assets/p2.png' right={ true }>
      <h6>UI / UX Design</h6>
      <h1>Social Table</h1>
      <h4>Social table is an app that provides a social container for reducing food waste.</h4>
    </WorkPanel>
    <div class='vgap'/>
    <WorkPanel backgroundStyle='gd3' imagePath='assets/p3.png'>
      <h6>UI / UX Design</h6>
      <h1>Show me ID</h1>
      <h4>Show me ID is an app that provides ID verification forthe web and products</h4>
    </WorkPanel>
    <div class='vgap'/>
    <WorkPanel backgroundStyle='gd4' imagePath='assets/p4.png' right={ true }>
      <h6>UX Design</h6>
      <h1>Channel Hyundai Card</h1>
      <h4>A video streaming website for Hyundai Card Branding and Marketing group.</h4>
    </WorkPanel>
    <div class='vgap'/>
    <div className='backToTop'>
      <h4><a href='#'>Back to top</a></h4>
    </div>
  </div>
}
