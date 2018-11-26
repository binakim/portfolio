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
            <div className='content'>
              E-Cigarette profits could surpass those of combustible cigaretts within 10 years
            </div>
          </div>
          <div className='col-12 col-md-7'>
            <img className='problemImage fitImage' src="assets/p-a/p1_2.jpg" data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section textOnly'>INSIGHTS</div>
        <div className='content'>
              I conducted user interviews to drive the
          planning phase. These are the key findings
          that defined the initial version of the
          product.
        </div>
        <div className='content row'>
          <div className='insight_summary order-5 order-md-1 col-12 col-md-6'>
             <div className='insight_title'>Differentiating points</div>
             <div>Common SNS services and trip journals should be represented differently.</div>
          </div>
          <div className='insight_entry order-1 order-md-2 col-12 col-md-6'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_2.png' />
            </div>
            <div>
              <div className='insight_statement'>“I like the budget management feature because I always spend over budget on my traveling.”</div>
              <div className='insight_name'>Jenny (28 years old, Product Designer</div>
            </div>
          </div>
          <div className='insight_summary order-6 order-md-3 col-12 col-md-6'>
             <div className='insight_title'>Effective Budget Management</div>
             <div>Designing the system to maange the amount systematically and effectively.</div>
          </div>
          <div className='insight_entry order-2 order-md-4 col-12 col-md-6'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_3.png' />
            </div>
            <div>
              <div className='insight_statement'>“What is different from saving on Google Maps?”</div>
              <div className='insight_name'>Jun (32 years old, graphic designer)</div>
            </div>
          </div>
          <div className='insight_summary order-7 order-md-5 col-12 col-md-6'>
             <div className='insight_title'>Various transportation</div>
             <div>When recording a trip, you need ot consider various means of transportation and variables during your trip.</div>
          </div>
          <div className='insight_entry order-3 order-md-6 col-12 col-md-6'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_4.png' />
            </div>
            <div>
              <div className='insight_statement'>“How to show the whole journey, if I move by car or bicycle?”</div>
              <div className='insight_name'>Michael (37 years old, Finance manager)</div>
            </div>
          </div>
          <div className='insight_summary order-8 order-md-7 col-12 col-md-6'>
             <div className='insight_title'>Simplification of map</div>
             <div>It should be able to show various information such as photographs, used amount, and location information in a concise and organized structure.</div>
          </div>
          <div className='insight_entry order-4 order-md-8 col-12 col-md-6'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_5.png' />
            </div>
            <div>
              <div className='insight_statement'>“People use Facebook or Instagram for  record their trip. What are the differentiators?”</div>
              <div className='insight_name'>Ruby Mag (47 years old, College Instructor)</div>
            </div>
          </div>
          <div className='insights_date'>Interview data: 24, February 2018</div>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>SOLUTION</div>
        <div className='solution content'>
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
