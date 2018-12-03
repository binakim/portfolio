import React from 'react';
import { Link } from "react-router-dom";
import { TransitionGroup } from 'react-transition-group';

import CenteredPage from './CenteredPage';
import WorkPanel from './WorkPanel';

import './WorkPage.scss';
import Highlight from './animation/highlight';

export default () => {
  return <div>
    <CenteredPage className='introduction'> 
        Hello, I'm <Highlight><span className='highlight animate'>Bina Kim</span></Highlight>.<br/>
        A <Highlight delay='1000'><span className='highlight animate'>product designer</span></Highlight><br/>
        who <Highlight delay='2000'><span className='highlight animate'>designs</span></Highlight> delightful<br/>
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
    <WorkPanel target='/project-d' backgroundStyle='gd4' imagePath='assets/p4.png' right={ true } last={ true}>
      <div className='workPanelCategory'>UX Design</div>
      <div className='workPanelTitle'>Channel Hyundai Card</div>
      <div className='workPanelDescription'>A video streaming website for Hyundai Card Branding and Marketing group.</div>
    </WorkPanel>
  </div>
}
