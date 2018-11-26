import React from 'react';

import CenteredPage from './CenteredPage';
import WorkPanel from './WorkPanel';
import FullImage from './FullImageComponent';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

export default () => {
  return <div className='project'>
    <div className='col-12'>
      <div className='fullWidthBoundHeightPanel gd1'>
        <div className='fullWidthYShift'>
          <img src='assets/p-a/p1.png' data-rjs="2"/>
        </div>
      </div>
    </div>
    <div className='col-12 col-md-5 projectATitle'>
      <div className='topPanelCategory'>UI / UX Design</div>
      <div className='topPanelTitle'>I was here</div>
      <div className='topPanelDescription'>An application that helps travelers to easily record their trips and manage their travel budget using their credit card.</div>
    </div>
    <div>
      <div className='sectionPanel col-12'>
        <div className='section'>OVERVIEW</div>
        <div className='content'>
              According to research, the most frequently
          issued credit card in 2017 is the Chase
          Sapphire Preferred Card. Many credit card
          companies are selling cards with travel
          benefits to follow growing demand for
          travel. More than 61% of  travelers use their
          credit cards when traveling, because they do
          not have any exchange fees and can use
          their points for airline or hotel use. The
          project is designed to increase loyalty to
          customers and card companies to create
          additional business models through data
          collection.
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>PROBLEM</div>
        <div className='row'>
          <div className='col-12 col-md-5'>
            <div className='content'>
                  Many people want to leave travel records
              after their trip. However most of the workers
              are busier after traveling, and the
              information such as the place, the location,
              etc. that traveled over time becomes
              increasingly difficult to remember. In
              addition, many people have spent more
              money than they thought during a trip.How
              can I easily and accurately record travel and
              manage a budget?
            </div>
          </div>
          <div className='col-12 col-md-7'>
            <img className='problemImage fitImage' src="assets/p-a/p1_2.jpg" data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='sectionPanel col-12 examples'>
        <div className='fullImage grayBackground'>
          <img className='p1_3' src="assets/p-a/p1_3.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <img className='p1_4' src="assets/p-a/p1_4.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <div className='p_text p1_1_text'>
            <div className='title'>
            <i className="material-icons location-icon">location_on</i>
            Set your trip
            </div>
            <div className='description'>
            Input your trip location and date
            </div>
          </div>
          <div className='p_text p1_5_1_text'>
            <img className='p1_5_1' src="assets/p-a/p1_5_1.png" data-rjs="2"/>
          </div>
          <img className='p1_5' src="assets/p-a/p1_5.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <div className='p_text p1_2_text'>
            <div className='title'>
            Set your Budget
            </div>
            <div className='description'>
              <div className='budget'>
                <div>
                  <i className="material-icons left-col-icon">credit_card</i>
                </div>
                <div>
                  Register card to track your travel expenses.
                </div>
              </div>
              <div className='budget'>
                <div>
                  <i className="material-icons left-col-icon">attach_money</i>
                </div>
                <div>
                  Set the travel expenses
                  to be used by category.
                </div>
              </div>
              <div className='budget'>
                <div>
                  <i className="material-icons left-col-icon">trending_up</i>
                </div>
                <div>
                  The amount of use per category
                  and per day can be identified
                  during the travel period.
                </div>
              </div>
            </div>
          </div>
          <div className='p_text p1_6_1_text'>
            <img className='p1_6_1' src="assets/p-a/p1_6_1.png" data-rjs="2"/>
          </div>
          <img className='p1_6' src="assets/p-a/p1_6.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <div className='p_text p1_3_text'>
            <div className='title'>
            Record Your Journey
            </div>
            <div className='description'>
                Use your photo and payment information
            to automatically record your journey during
            the trip. Record function allows you to record travel routes.
            </div>
          </div>
          <img className='p1_7' src="assets/p-a/p1_7.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <img className='p1_8' src="assets/p-a/p1_8.jpg" data-rjs="2"/>
        </div>
      </div>
      <div className='sectionPanel col-12'>
        <div className='section'>INSIGHTS</div>
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
            <div className='section'>CONCLUSION</div>
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
    <div className='projectNav row'>
      <div className='col-6'>
        <div className='link'>&lt; Previous Project</div>
        <div className='hide_mobile'>
          <div className='thumb gd4'>
            <img src='assets/p4.png' data-rjs="2"/>
          </div>
          <div className='workPanelCategory'>UX Design</div>
          <div className='workPanelTitle'>Channel Hyundai Card</div>
        </div>
      </div>
      <div className='col-6'>
        <div className='link text-right'>Next Project &gt;</div>
        <div className='hide_mobile'>
          <div className='thumb gd2'>
            <img src='assets/p2.png' data-rjs="2"/>
          </div>
          <div className='workPanelCategory'>UI / UX Design</div>
          <div className='workPanelTitle'>Social Table</div>
        </div>
      </div>
    </div>
  </div>
}
