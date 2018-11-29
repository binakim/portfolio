import React from 'react';

import ProjectNav from './ProjectNav';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

export default () => {
  return <div className='project p4'>
    <div className='col-12'>
      <div className='fullWidthBoundHeightPanel gd4'>
        <div className='fullWidthYShift'>
          <img src='assets/p4.png' data-rjs="2"/>
        </div>
      </div>
    </div>
    <div className='col-12 col-lg-5 projectTitle'>
      <div className='topPanelCategory'>Product Design</div>
      <div className='topPanelTitle'>Channel Hyundai Card</div>
      <div className='topPanelDescription'>The responsive video streaming website for branding and marketing of credit card companies.</div>
    </div>
  

  <div>
    <div className='sectionPanel col-12'>
        <div className='section textOnly'>INTRO</div>
        <div className='content'>
        The site produces videos that inspire users from various fields such as finance, art, music, and design to show the lifestyle that Hyundai Card pursues. I have planned site content display strategy, information architecture, video player UX design and content recommendation algorithm in this project.
        </div>
         <div className='subtitle entry content'>ROLE</div>
          <div className='content'>
            Lead UX Designer / Contents Strategy, Market Research, A/B Test, Admin Design, Video Recommend Algorithm, Wireframes, QA
          </div>
          <div className='subtitle entry content'>COMPANY </div>
          <div className='content'>
            Hyundai Card
          </div>          
          <div className='subtitle entry content'>PERIOD </div>
          <div className='content'>
            April 2015 – January 2016 
          </div> 
            <div className='subtitle entry content'>MISSION </div>
          <div className='content'>
            Create a responsive video streaming website
          </div>         
     </div>

    <div className='sectionPanel col-12'>
        <div className='section image'>IDEA SKETCH</div>
        <div className='content'>
        Effective UX methods were considered in a number of ways in preparation for minimal content available in the early stages of the site opening. I considered a horizontal scrolling website and suggested tags.
        There were two UX strategy points.<br/>
        -How to effectively expose a few contents at the beginning of the site?<br/>
        -Navigation configuration to allow continuous viewing of content. 
        </div>
        <img className='fitImage' src='assets/p4/p4_1.png' data-rjs="2"/>
    </div>


    <div className='sectionPanel col-12'>
        <div className='section image'>DRAFT DESIGN</div>
        <div className='content'>
        After the first horizontal scrolling design, we proceeded with user testing.
        </div>
        <div className='subtitle entry content'>Main Home </div>
        <div className='content'>
        A horizontal scrolling site was designed to change the default grid according to the content importance.
        </div>
        <img className='fitImage' src='assets/p4/p4_2.jpg' data-rjs="2"/>
        <div className='subtitle entry content'>Channel List </div>
        <div className='content'>
        Designed a channel list page to view program introduction and episodes.
        </div>
        <img className='fitImage' src='assets/p4/p4_3.jpg' data-rjs="2"/>
    </div>

    <div className='sectionPanel col-12'>
        <div className='section image'>USABILITY TEST</div>
        <div className='content'>
        For the usability test with first version mock-up, we checked the list below. <br/>
        -Video channel usage behavior <br/>
        -Device preference <br/>
        -Content expected from service concept <br/>
        -Site first impressions <br/>
        -Contents interest <br/>
        -Navigation usability <br/>
        </div>
        <div className='subtitle entry content'>Result</div>
        <div className='content'>
       User tests showed that most visitors felt that the site was new, but there were difficulties in using it, and the content was not very compelling.  Before launching the website, we decided to increase the number of various videos that users would see.
        </div>
        <img className='fitImage' src='assets/p4/p4_4.jpg' data-rjs="2"/>
    </div>


   <div className='sectionPanel col-12'>
        <div className='section image'>RECOMMEND ALGORITHM</div>
        <div className='content'>
        Since the videos are not updated often, the priority of exposure was alternately based on genre, theme, popularity, and latest video. For the personalized recommended video, we added criteria such as the video you watched and the video you liked.
        </div>
        <img className='fitImage' src='assets/p4/p4_5.jpg' data-rjs="2"/>
    </div>



   <div className='sectionPanel col-12'>
        <div className='section image'>COMMENTS OF EXPERTS</div>
        <div className='content'>
        We added a line of comments from experts to make the content more interesting and reliable.
        </div>
        <img className='fitImage' src='assets/p4/p4_6.jpg' data-rjs="2"/>
    </div>




   <div className='sectionPanel col-12'>
        <div className='section image'>QA</div>
        <div className='content'>
        We added a line of comments from experts to make the content more interesting and reliable.
        </div>
        <img className='fitImage' src='assets/p4/p4_7.jpg' data-rjs="2"/>
    </div>


  <div className='sectionPanel col-12'>
        <div className='section image'>FINAL DIESIGN</div>
        <div className='sectionImage'>
       <img className='fitImage' src='assets/p4/p4_13.jpg' data-rjs="2"/>
       </div>
       <div className='subtitle entry content'>Home </div>
       <div className='sectionImage'>
       <img className='fitImage' src='assets/p4/p4_8.jpg' data-rjs="2"/>
       </div>
       <div className='subtitle entry content'>Channel Home </div>
       <div className='sectionImage'>
       <img className='fitImage' src='assets/p4/p4_9.jpg' data-rjs="2"/>
       </div>
       <div className='subtitle entry content'>Content</div>
       <div className='sectionImage'>
       <img className='fitImage' src='assets/p4/p4_10.jpg' data-rjs="2"/>
       </div>
       <div className='subtitle entry content'>Mobile</div>
       <div className='sectionImage'>
       <img className='fitImage' src='assets/p4/p4_12.png' data-rjs="2"/>
       </div>
  </div>

    <div className='sectionPanel fullImage conclusion'>
      <div className='container-fluid'>
        <div className='col-12'>
          <div className='section textOnly'>CONCLUSION</div>
          <div className='content'>
                            This case study focuses on the process of
            validating and solving the problem, and if the
            service is actually provided by a credit card
            company, it will be possible to use more user data
            as well as an automatic credit card connection.
            The credit card company can analyze the card
            usage patterns during the travel of the user. As the
            service becomes more active, it can develop into a
            community where users can share photos and
            travel routes.
          </div>
        </div>
      </div>
    </div>
</div>  {/* content end */}


    <ProjectNav 
      prev={{
        href: '/project-b',
        className: 'gd3',
        imgUrl: 'assets/p3.png',
        category: 'UI / UX Design',
        title: 'Show me ID'
      }}
      next={{
        href: '/project-d',
        className: 'gd1',
        imgUrl: 'assets/p1.png',
        category: 'UI / UX Design',
        title: 'I was here'
      }}
    />
  </div>
}


  