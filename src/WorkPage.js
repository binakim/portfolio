import React from 'react';
import { Link } from "react-router-dom";

import CenteredPage from './CenteredPage';
import WorkPanel from './WorkPanel';

import './WorkPage.scss';

export default () => {
  return <div>
    <CenteredPage className='introduction'> 
      Hello, I'm <span className='highlight'>Bina Kim</span>.<br/>
      A <span className='highlight'>product designer</span><br/>
      who <span className='highlight'>designs</span> delightful<br/>
      User Experience.<br/>
    </CenteredPage>
    <WorkPanel target='/project-a' backgroundStyle='gd1' imagePath='assets/p1.png'>
      <div className='workPanelCategory'>UI / UX Design</div>
      <div className='workPanelTitle'>I was here</div>
      <div className='workPanelDescription'>An application that helps travelers to easily record their trips and manage their travel budget using their credit card.</div>
    </WorkPanel>
    <WorkPanel target='/project-b' backgroundStyle='gd2' imagePath='assets/p2.png' right={ true }>
      <div className='workPanelCategory'>UI / UX Design</div>
      <div className='workPanelTitle'>Social Table</div>
      <div className='workPanelDescription'>Social table is an app that provides a social container for reducing food waste.</div>
    </WorkPanel>
    <WorkPanel target='/project-c' backgroundStyle='gd3' imagePath='assets/p3.png'>
      <div className='workPanelCategory'>UI / UX Design</div>
      <div className='workPanelTitle'>Show me ID</div>
      <div className='workPanelDescription'>Show me ID is an app that provides ID verification forthe web and products</div>
    </WorkPanel>
    <WorkPanel target='/project-d' backgroundStyle='gd4' imagePath='assets/p4.png' right={ true }>
      <div className='workPanelCategory'>UX Design</div>
      <div className='workPanelTitle'>Channel Hyundai Card</div>
      <div className='workPanelDescription'>A video streaming website for Hyundai Card Branding and Marketing group.</div>
    </WorkPanel>
    <div className='backToTop'>
      <Link to='#'>Back to top</Link>
    </div>
  </div>
}
