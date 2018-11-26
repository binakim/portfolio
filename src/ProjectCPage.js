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
        <div className='section textOnly'>RESEARCH</div>
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
        <div className='section'>TARGET</div>
        <div className='title content'>
            Create a travel journal & manage travel
          budget by recording the card data and photo
          exif data used during travel.
        </div>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_9.png' data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>RESEARCH</div>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_10.jpg' data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12 hide_mobile'>
        <div className='section'>PERSONAS</div>
        <div className='content row persona_bottom_fix'>
          <div className='persona_profile col-md-2'>
             <img src='assets/p-a/p1_11.png' data-rjs="2"/>
             <div className='persona_name'>Jessica Jade</div>
             <div className='persona_bio'>
               <div>Graphic Designer</div>
               <div>Oakland, CA</div>
               <div>31 years old</div>
               <div>Single</div>
               <div>Income: 90K</div>
             </div>
          </div>
          <div className='persona_content col-md-10'>
            <div>
              <div className='persona_quote'>“I enjoy traveling around the country on weekends and traveling abroad on a long vacation. I like local shopping and going to local restaurants.”</div>
              <div className='persona_env'>Environment</div>
              <div className='persona_text'>I've been working for as a UX designer for 7 years. I work sometimes until late but, I can take a long trip. Mostly I go on a long trip once a year.  I just finished a big project so, I will go on a long trip to Iceland for 10 days.  I love to eat local foods and buy local products. I mostly use my credit card when I go to trip, because my credit card has no foreign transaction fees.</div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>Due to my travel style, I usually spend money a lot of travel. I need to manage my trip budget. 
Also, I usually make a trip journal after the trip, because I want to remember that moment.</div>
              <div className='persona_env'>Challenges</div>
              <div className='persona_text'>During the trip, I just focus on my trip and I can’t care about my budget as well and , it’s hard to memorize or mark every single place.</div>
            </div>
          </div>
          <div className='persona_profile col-md-2'>
             <img src='assets/p-a/p1_11_2.png' data-rjs="2"/>
             <div className='persona_name'>Celine Ryu</div>
             <div className='persona_bio'>
               <div>Digital Marketer</div>
               <div>Seoul, South Korea</div>
               <div>36 years old</div>
               <div>Married</div>
               <div>Income: 80K</div>
             </div>
          </div>
          <div className='persona_content col-md-10'>
            <div>
              <div className='persona_quote'>“I pay everything with my travel credit card. Because I can check the places that I visited.”</div>
              <div className='persona_env'>Environment</div>
              <div className='persona_text'>I've been working for as a Digital Marketer for 7 years. I goes on a short trip twice a month and a long trip once a year. I mostly use my credit card when I go to trip, because I can check the places that I visited. I just came back from my honeymoon, and I’m planning to write a blog.</div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>I try to make a trip journal after the trip, because I want to remember that moment.</div>
              <div className='persona_env'>Challenges</div>
              <div className='persona_text'>Mostly I’ m so busy to work after the trip. Also it’s hard to remember the places I went.</div>
            </div>
          </div>
          <div className='persona_profile col-md-2'>
             <img src='assets/p-a/p1_11_3.png' data-rjs="2"/>
             <div className='persona_name'>Ryno D. Lee</div>
             <div className='persona_bio'>
               <div>English Teacher</div>
               <div>Oakland, CA</div>
               <div>28 years old</div>
               <div>Single</div>
               <div>Income: 60K</div>
             </div>
          </div>
          <div className='persona_content col-md-10'>
            <div>
              <div className='persona_quote'>“When I goes on a trip, I pay for hotels and flights with a credit card which has travel rewards.”</div>
              <div className='persona_env'>Environment</div>
              <div className='persona_text'>I’m an English teacher and musician. I go on a long trip three times a year to meet my girlfriend. I love to go to Europe and I use credit card and cash both.</div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>I want to save money on foreign exchange because I travel a lot in Europe.</div>
              <div className='persona_env'>Challenges</div>
              <div className='persona_text'>I mostly use credit card during a trip, but many Europe stores didn’t accept credit card.</div>
            </div>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>STORY BOARD</div>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_12.png' data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>SIMULATION TEST</div>
        <div className='sim_content'>
          <div className='subtitle'>Route Test</div>
          <div className='sim_description'>Drawing the route based on the card payment</div>
          <img className='fitImage' src='assets/p-a/p1_13.jpg' data-rjs="2"/>
        </div>
        <div className='sim_content'>
          <div className='subtitle'>Photo location & Payment location matching test</div>
          <div className='sim_description'>Matching the payment location with photo location on the map</div>
          <img className='fitImage' src='assets/p-a/p1_13_2.jpg' data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>TASK FLOW</div>
        <div className='content'>
          <div>Sign up / Card reigster</div>
          <img className='fitImage' src='assets/p-a/p1_14.png' data-rjs="2"/>
        </div>
        <div className='content'>
          <div>Journey record</div>
          <img className='fitImage' src='assets/p-a/p1_14_2.png' data-rjs="2"/>
        </div>
        <div className='content'>
          <div>Budget management</div>
          <img className='fitImage' src='assets/p-a/p1_14_3.png' data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>WIREFRAMES</div>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_15.png' data-rjs="2"/>
          <img className='fitImage' src='assets/p-a/p1_15_2.png' data-rjs="2"/>
          <img className='fitImage' src='assets/p-a/p1_15_3.png' data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>USER TEST</div>
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
        href: '/project-d',
        className: 'gd4',
        imgUrl: 'assets/p4.png',
        category: 'UI / UX Design',
        title: 'Channel Hyundai Card'
      }}
      next={{
        href: '/project-b',
        className: 'gd2',
        imgUrl: 'assets/p2.png',
        category: 'UI / UX Design',
        title: 'Social Table'
      }}/>
  </div>
}
