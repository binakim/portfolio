import React from 'react';

import ProjectNav from './ProjectNav';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

export default () => {
  return <div className='project p3'>
    <div className='col-12'>
      <div className='fullWidthBoundHeightPanel gd3'>
        <div className='fullWidthYShift'>
          <img src='assets/p3.png' data-rjs="2"/>
        </div>
      </div>
    </div>
    <div className='col-12 col-lg-4 projectTitle'>
      <div className='topPanelCategory'>UI / UX Design</div>
      <div className='topPanelTitle'>Show me ID</div>
      <div className='topPanelDescription'>Show me id is an app that ID verification for the web, or products.</div>
    </div>
    <div>
      <div className='sectionPanel col-12'>
        <div className='section textOnly'>OVERVIEW</div>
        <div className='content'>
              As of 8 August 2016, the FDA extended its
          regulatory power to include e cigarettes.
          Under this ruling the FDA will evaluate
          certain issues, including ingredients,
          product features and health risks, as well
          their appeal to minors and non-users.The
          FDA rule also bans access to minors.
          A photo ID is required to buy e-cig, and their
          sale in all-ages vending machines is not
          permitted. The FDA in September 2016 has
          sent warning letters for unlawful underage
          sales to online retailers and retailers of e-
          cigarettes. However, there are many online
          stores can buy an e-cig with out ID.
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section textOnly'>MARKET</div>
        <div className='row'>
          <div className='col-12'>
            <div className='content'>
                    The tobacco industry continues developing
                new products such as smokeless tobacco
                and candy and fruit-flavored cigarillos that
                entice youth to try tobacco. A new challenge
                is the rising popularity of electronic
                smoking devices also known as e-cigarettes
                which dispense flavored nicotine vapor yet
                are not covered by most no smoking laws.
                Between 2011 and 2013 the number of U.S.
                youth who had never smoked a cigarette but
                used electronic cigarettes tripled to
                263,000.
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='content caption'>
              E-Cigarette profits could surpass those of combustible cigaretts within 10 years
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <img className='fitImage' src="assets/p3/p3_1.jpg" data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>RESEARCH</div>
        <div className='row inverse_sectionImage'>
          <div className='col-12 col-md-6'>
            <img className='sectionImage fitImage' src="assets/p3/p3_2.jpg" data-rjs="2"/>
          </div>
          <div className='col-12 col-md-6'>
            <img className='sectionImage fitImage' src="assets/p3/p3_2_2.jpg" data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section textOnly'>PROBLEMS</div>
        <div className='title content'>
              To purchase a cigarette on the market, you
          need to check your ID, but if you have a
          credit card online, you can buy a cigarette
          without an ID check. As described above, an
          authentication method for an article
          requiring an ID check is also required online.
        </div>
        <div className='row inverse_sectionImage'>
          <div className='entry col-12 col-md-6'>
            <div className='subtitle entry content'>Cigarette</div>
            <div className='entry content'>Warning pictures &messages<br/> Face to Face ID check</div>
            <img className='sectionImage p3_3_1 fitImage' src="assets/p3/p3_3.jpg" data-rjs="2"/>
          </div>
          <div className='entry col-12 col-md-6'>
            <div className='subtitle entry content'>E-Cigarette</div>
            <div className='entry content'>No warning messages <br/> Youth prevention announcement & Credit Card check</div>
            <img className='sectionImage p3_3_2 fitImage' src="assets/p3/p3_3_2.jpg" data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>TARGET</div>
        <div className='content row'>
          <div className='twoColLayout'>
             <div className='black-yellow-circle d-none d-md-block'>
               <div>DIRECT</div>
             </div>
             <div className='font-weight-bold content-heading-margin d-md-none'>DIRECT</div>
          </div>
          <div className='twoColLayout'>
            <div className=''>The company wants a more secure alternative by requiring the user to validate their identity with valid 
credentials that are compared with a selfie in real-time.<br/>
-Finance services  ( ex. Bank, Credit card, Stock)<br/>
-Adult product companies (ex. E-cigarettes)<br/>
-Goverment sites</div>
          </div>
        </div>
        <div className='content row'>
          <div className='twoColLayout'>
             <div className='yellow-black-circle d-none d-md-block'>
               <div>INDIRECT</div>
             </div>
             <div className='font-weight-bold content-heading-margin d-md-none'>INDIRECT</div>
          </div>
          <div className='twoColLayout'>
          <div className=''>Anyone who use the site requiring ID check.<br/>
The place where  ID check is needed.</div>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>PERSONA</div>
        <div className='content row'>
          <div className='persona_profile twoColLayout mb-0'>
             <img src='assets/p3/p3_5.png' data-rjs="2"/>
             <div className='persona_name'>Anderson  Jack</div>
             <div className='persona_bio'>
               <div>Age: 42 </div>
               <div>Job : E-Cigarettes start up CTO</div>
             </div>
          </div>
          <div className='persona_description twoColLayout mb-0'>
             <div className='persona_text'>
    I’m the CTO of E-Cigarettes company. 
Recently, our company grows up so fast. On  
the other  hand, we are having some 
problems, which is the increase in teenage 
our product use.  Eighty percent of our 
products are sold online. Therefore, we 
prohibit teenagers from buying our products 
by checking credit card. Nevertheless, teens 
still buy and use our product, so we need the 
more accurate system. We are looking for 
the system which is secure and seamless.
             </div>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>SOLUTION</div>
        <div className='content row'>
          <div className='col-12 col-lg-6 pr-lg-5'>
            <div className='content2 text-center'>Offline Store</div>
            <div className='content font-weight-bold text-center'>Face to Face ID Check</div>
            <img className='fitImage' src='assets/p3/p3_6_m0.jpg' data-rjs="2"/>
          </div>
          <div className='solutionConnector'>
            <img src='assets/p3/p3_6_m1.png' data-rjs="2"/>
          </div>
          <div className='col-12 col-lg-6 pl-lg-5'>
            <div className='content2 text-center'>Online Store</div>
            <div className='content font-weight-bold text-center'></div>
            <img className='fitImage' src='assets/p3/p3_6_m2.png' data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>USER FLOW</div>
        <img className='fitImage' src='assets/p3/p3_7.png' data-rjs="2"/>
      </div>
      <div className='sectionPanel col-12'>
        <div className='fullImage grayBackground'>
          <img className='' src="assets/p3/p3_8.jpg" data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>proof of concept</div>
        <div className='font-weight-bold content'>Face Verification</div>
        <img className='sectionImage fitImage' src='assets/p3/p3_9.png' data-rjs="2"/>
        <div className='font-weight-bold content'>ID Scan</div>
        <img className='sectionImage fitImage' src='assets/p3/p3_9_2.png' data-rjs="2"/>
        <div className='font-weight-bold content'>Verified</div>
        <img className='sectionImage fitImage mb-0' src='assets/p3/p3_9_3.png' data-rjs="2"/>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>prototype</div>
        <div className='text-center'>
          <video className="video" controls>
            <source src="assets/p3/showmeid_BinaKim_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>concept video</div>
        <div className='text-center'>
          <video className="video" controls>
            <source src="assets/p3/Mod8.1_BinaKim_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section image'>USER TEST</div>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_16.png' data-rjs="2"/>
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
    </div>
    <ProjectNav 
      prev={{
        href: '/project-b',
        className: 'gd2',
        imgUrl: 'assets/p2.png',
        category: 'UI / UX Design',
        title: 'Social Table'
      }}
      next={{
        href: '/project-d',
        className: 'gd4',
        imgUrl: 'assets/p4.png',
        category: 'UI / UX Design',
        title: 'Channel Hyundai Card'
      }}
    />
  </div>
}
