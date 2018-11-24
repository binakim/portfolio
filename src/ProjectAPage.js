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
          <img src='assets/p1.png' data-rjs="2"/>
        </div>
      </div>
    </div>
    <div className='col-12'>
      <div className='workPanelCategory'>UI / UX Design</div>
      <div className='workPanelTitle'>I was here</div>
      <div className='workPanelDescription'>An application that helps travelers to easily record their trips and manage their travel budget using their credit card.</div>
    </div>
    <div className='col-12'>
      <div className='sectionPanel'>
        <span className='section'>OVERVIEW</span>
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
      <div className='sectionPanel'>
        <span className='section'>PROBLEM</span>
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
        <img className='fitImage' src="assets/p-a/p1_2.jpg" data-rjs="2"/>
      </div>
      <div className='sectionPanel examples'>
        <div className='fullImage grayBackground'>
          <img className='p1_3' src="assets/p-a/p1_3.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <img className='p1_4' src="assets/p-a/p1_4.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <div className='p_text'>
            <div className='title'>
            <i className="material-icons location-icon">location_on</i>
            Set your trip
            </div>
            <div className='description'>
            Input your trip location and date
            </div>
          </div>
          <img className='p1_5' src="assets/p-a/p1_5.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <div className='p_text'>
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
          <img className='p1_6' src="assets/p-a/p1_6.jpg" data-rjs="2"/>
        </div>
        <div className='fullImage grayBackground'>
          <div className='p_text'>
            <div className='title'>
            <i className="material-icons location-icon">location_on</i>
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
      <div className='sectionPanel'>
        <span className='section'>INSIGHTS</span>
        <div className='content'>
              I conducted user interviews to drive the
          planning phase. These are the key findings
          that defined the initial version of the
          product.
        </div>
        <div className='content'>
          <div className='insight_entry'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_2.png' />
            </div>
            <div>
              <div className='insight_statement'>“I like the budget management feature because I always spend over budget on my traveling.”</div>
              <div className='insight_name'>Jenny (28 years old, Product Designer</div>
            </div>
          </div>
          <div className='insight_entry'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_3.png' />
            </div>
            <div>
              <div className='insight_statement'>“What is different from saving on Google Maps?”</div>
              <div className='insight_name'>Jun (32 years old, graphic designer)</div>
            </div>
          </div>
          <div className='insight_entry'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_4.png' />
            </div>
            <div>
              <div className='insight_statement'>“How to show the whole journey, if I move by car or bicycle?”</div>
              <div className='insight_name'>Michael (37 years old, Finance manager)</div>
            </div>
          </div>
          <div className='insight_entry'>
            <div className='insight_profile'><img src='assets/p-a/p1_9_5.png' />
            </div>
            <div>
              <div className='insight_statement'>“People use Facebook or Instagram for  record their trip. What are the differentiators?”</div>
              <div className='insight_name'>Ruby Mag (47 years old, College Instructor)</div>
            </div>
          </div>
        </div>
      </div>
      <div className='sectionPanel'>
        <span className='section'>SOLUTION</span>
        <div className='content'>
            Create a travel journal & manage travel
          budget by recording the card data and photo
          exif data used during travel.
        </div>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_9.png'/>
        </div>
      </div>
      <div className='sectionPanel'>
        <span className='section'>RESEARCH</span>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_10.jpg'/>
        </div>
      </div>
      <div className='sectionPanel'>
        <span className='section'>STORY BOARD</span>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_12.png'/>
        </div>
      </div>
      <div className='sectionPanel'>
        <span className='section'>SIMULATION TEST</span>
        <div className='content'>
          <div className='subtitle'>Route Test</div>
          <div>Drawing the route based on the card payment</div>
          <img className='fitImage' src='assets/p-a/p1_13.jpg'/>
        </div>
        <div className='content'>
          <div className='subtitle'>Photo location & Payment location matching test</div>
          <div>Matching the payment location with photo location on the map</div>
          <img className='fitImage' src='assets/p-a/p1_13_2.jpg'/>
        </div>
      </div>
      <div className='sectionPanel'>
        <span className='section'>TASK FLOW</span>
        <div className='content'>
          <div>Sign up / Card reigster</div>
          <img className='fitImage' src='assets/p-a/p1_14.png'/>
        </div>
        <div className='content'>
          <div>Journey record</div>
          <img className='fitImage' src='assets/p-a/p1_14_2.png'/>
        </div>
        <div className='content'>
          <div>Budget management</div>
          <img className='fitImage' src='assets/p-a/p1_14_3.png'/>
        </div>
      </div>
      <div className='sectionPanel'>
        <span className='section'>WIREFRAMES</span>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_15.png'/>
          <img className='fitImage' src='assets/p-a/p1_15_2.png'/>
          <img className='fitImage' src='assets/p-a/p1_15_3.png'/>
        </div>
      </div>
      <div className='sectionPanel'>
        <span className='section'>USER TEST</span>
        <div className='content'>
          <img className='fitImage' src='assets/p-a/p1_16.png'/>
        </div>
      </div>
      <div className='sectionPanel fullImage conclusion'>
        <div className='container-fluid'>
          <div className='col-12'>
            <span className='section'>CONCLUSION</span>
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
  </div>
}
