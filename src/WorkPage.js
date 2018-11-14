import React from 'react';

import CenteredPage from './CenteredPage';
import WorkPanel from './WorkPanel';

export default () => {
  return <div>
    <CenteredPage className='centerPage'> 
      <p>Hello, I'm <span className='highlight'>Bina Kim</span>.</p>
      <p>A <span className='highlight'>product designer</span></p>
      <p>who <span className='highlight'>designs</span> delightful</p>
      <p><span className='highlight'>User Experience</span>.</p>
    </CenteredPage>
    <WorkPanel backgroundStyle='gd1' imagePath='assets/p1.png'>
      <h6>UI / UX Design</h6>
      <h1>I was here</h1>
      <h4>An application that helps travelers to easily record their trips and manage their travel budget using their credit card.</h4>
    </WorkPanel>
    <WorkPanel backgroundStyle='gd2' imagePath='assets/p2.png' right={ true }>
      <h6>UI / UX Design</h6>
      <h1>Social Table</h1>
      <h4>Social table is an app that provides a social container for reducing food waste.</h4>
    </WorkPanel>
    <WorkPanel backgroundStyle='gd3' imagePath='assets/p3.png'>
      <h6>UI / UX Design</h6>
      <h1>Show me ID</h1>
      <h4>Show me ID is an app that provides ID verification forthe web and products</h4>
    </WorkPanel>
    <WorkPanel backgroundStyle='gd4' imagePath='assets/p4.png' right={ true }>
      <h6>UX Design</h6>
      <h1>Channel Hyundai Card</h1>
      <h4>A video streaming website for Hyundai Card Branding and Marketing group.</h4>
    </WorkPanel>
    <div className='backToTop'>
      <a href='#'>Back to top</a>
    </div>
  </div>
}
