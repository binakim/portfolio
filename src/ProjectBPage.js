import React from 'react';

import ProjectNav from './ProjectNav';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

export default () => {
  return <div className='project p2'>
    <div className='col-12'>
      <div className='fullWidthBoundHeightPanel gd3'>
        <div className='fullWidthYShift'>
          <img src='assets/p2.png' data-rjs="2"/>
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
        <div className='section textOnly'>INTRO</div>
        <div className='content'>
        I've been interested in food waste for a long time.  Last summer vacation, I want to donate some of my food ingredients because I go on a long trip. I found some app for food sharing or donation, but they mostly look not an activation. Through this project, I want to design the app for food waste reducing to create an effective solution.
        </div>
    </div>

    <div className='sectionPanel col-12'>
        <div className='section image'>PROJECT GOAL</div>
        <img className='fitImage' src='assets/p2/p2_1.jpg' data-rjs="2"/>
    </div>


    <div className='sectionPanel col-12'>
      <div className='section image'>COMPETITORS</div>
      <img className='fitImage' src='assets/p2/p2_2.jpg' data-rjs="2"/>
    </div>

{/* findings*/}

    <div className='sectionPanel col-12'>
      <div className='section textOnly'>Findings</div>
     {/*finding1 */}
      <div className='sectionImage row'>
        <div className='col-12'>
          <div className='font-weight-bold content'>Reliable contents</div>         
        </div>
        <div className='col-12 col-md-6'>
          <div className='font-weight-bold content'>Good</div>
          <div className='subtitle entry content'>Meal sharing </div>
             <div className='entry content'>
              Provides very detailed information because the service you provide is food.
              They made a request by putting a guide message on the request page.
              Members must verify their phone number and email.
              It also works in conjunction with social identity.
              Show membership date and activity history.s
             </div>  
        </div> 
        <div className='col-12 col-md-6'>
            <div className='font-weight-bold content'>Bad</div>
            <div className='subtitle entry content'>Food For All </div>
              <div className='entry content'>
  There is no review for the foods. If it has reviews, it would help to choose the foods. 
              </div>
        </div>
      </div>
      <div className='col-12'>
        <img className='fitImage' src='assets/p2/p2_3.jpg' data-rjs="2"/>
      </div> 

  {/*finding2 */}      
          <div className='col-12'>
          <div className='font-weight-bold content'>Various reducing food waste methods</div>         
          </div> 

       <div className='col-12 col-md-6'>
          <div className='font-weight-bold content'>Good</div>
          <div className='subtitle entry content'>Food Runners </div>
             <div className='entry content'>
              They are helping individuals and companies to make food donations easier through food pickup service.
As a food pickup volunteer, you can help this company.
Restaurants You can donate food in a variety of ways, including food and homemade food.
             </div>  
              <div className='subtitle entry content'>Food For All </div>
             <div className='entry content'>
              Each time you participate in the service, you earn points to give additional benefits.
In addition to food donations, user can add donations to organizations, or donate money.
             </div> 
        </div> 


      <div className='col-12 col-md-6'>
          <div className='font-weight-bold content'>Bad</div>
          <div className='subtitle entry content'>Food Runners</div>
            <div className='entry content'>
To make a donation, you must call the organization.
            </div>
          <div className='subtitle entry content'>Food for all</div>
            <div className='entry content'>
The service is only available in Boston and New York.
            </div>
      </div>

       <div className='sectionPanel col-12'>
        <img className='fitImage' src='assets/p2/p2_4.jpg' data-rjs="2"/>
      </div>    

  {/*finding3 */}      
          <div className='col-12'>
          <div className='font-weight-bold content'>Intuitive design</div>         
          </div> 

       <div className='col-12 col-md-6'>
          <div className='font-weight-bold content'>Good</div>
          <div className='subtitle entry content'>Food For All </div>
             <div className='entry content'>
              Create intuitive and intuitive design through illustrations and icons.
The most important buttons in the page are designed to be noticeable.
             </div>  
             
        </div> 


      <div className='col-12 col-md-6'>
          <div className='font-weight-bold content'>Bad</div>
          <div className='subtitle entry content'>Food Runners</div>
            <div className='entry content'>
Old-looking page design
            </div>
      </div>

       <div className='sectionPanel col-12'>
        <img className='fitImage' src='assets/p2/p2_5.jpg' data-rjs="2"/>
      </div>    

  </div> 


{/* end of findings*/}

{/* persona*/}

    <div className='sectionPanel col-12 hide_mobile'>
        <div className='section'>PERSONAS</div>
        <div className='content row persona_bottom_fix'>
          <div className='persona_profile twoColLayout'>
             <img src='assets/p2/p1_9_2.png' data-rjs="2"/>
             <div className='persona_name'>Jennifer</div>
             <div className='persona_bio'>
               <div>College student</div>
               <div>Berkeley, CA</div>
               <div>23 years old</div>
               <div>Single</div>
             </div>
          </div>
          <div className='persona_content twoColLayout'>
            <div>
              <div className='persona_quote'>“I do not want to waste food during the test or vacation.”</div>
              <div className='persona_env'>Bio</div>
              <div className='persona_text'>She is a college student majored business. she is from India originally, and she likes cooking indian food. Sometimes she cooks food and brings that at school. She likes sharing her recipe with her friends and cooking together. Also, she buys ingredients for cooking with her roommates because they can save money. 
Sometimes they exchange their remaining ingredients.</div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>She doesn’t want to abandon the remaining food ingredients. She want to save money on buying food ingredients.
              </div>
              <div className='persona_env'>Frustration</div>
              <div className='persona_text'>At the end of the test period, there is no time to cook and the remaining food items are discarded. When I go to my hometown during vacation, there are many food ingredients that can not be eaten anymore.
              </div>
          </div>

          <div className='persona_profile twoColLayout'>
             <img src='assets/p2/p1_9_4.png' data-rjs="2"/>
             <div className='persona_name'>Michael </div>
             <div className='persona_bio'>
               <div>Software Enginner</div>
               <div>San Francisco, CA</div>
               <div>32 years old</div>
               <div>Single</div>
               <div>Income: 150K</div>
             </div>
          </div>
          <div className='persona_content twoColLayout'>
            <div>
              <div className='persona_quote'>“Because I cook only on weekends, the leftovers often go bad.”</div>
              <div className='persona_env'>Bio</div>
              <div className='persona_text'>He is a software engineer in San Francisco. He eats breakfast, lunch at work, and dinner sometimes at home. However, when there is a lot of meetings, he has dinner outside. He is interested in cooking recently, so sometimes cook on weekends. He commutes by bicycles because he is interested in environmental protection.
               </div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>He wants to learn how to use food ingredients. He wants to donate food that he doesn’t use. He doesn’t want to waste foods from cooking on weekend.</div>
              <div className='persona_env'>Frustration</div>
              <div className='persona_text'>There are some ingredients that he doesn’t know about that ,so he doesn’t use and discarded. There are a lot of food ingredients go bad, becuase hecan not cook often.</div>
            </div>
          </div>

          <div className='persona_profile twoColLayout'>
             <img src='assets/p2/p1_9_5.png' data-rjs="2"/>
             <div className='persona_name'>Anna</div>
             <div className='persona_bio'>
               <div>Instructor</div>
               <div>Diblin, CA</div>
               <div>48 years old</div>
               <div>Marrid</div>
               <div>Income: 110K</div>
             </div>
          </div>
          <div className='persona_content twoColLayout'>
            <div>
              <div className='persona_quote'>“I forgot what I bought many times, because I bought many foods at once.”</div>
              <div className='persona_env'>Bio</div>
              <div className='persona_text'>She is a college instructor teachs biology. She lives with her 13- and 8-year-old two sons and her husband. She goes to school three times a week and teach students. She usually has dinner at home with her family. She is too busy to go shopping often, so she buy lots of food ingredients at once. she lives in an apartment for a long time, know my neighbors well, and sometimes have a barbecue.
              </div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>She want to share the left ingredients with neighbors.</div>
              <div className='persona_env'>Frustration</div>
              <div className='persona_text'>She often throws away leftovers from the refrigerator.There are many food ingredients that pass the expiration date after purchasing, because she bought a lot of foods and sometimes forgot it.</div>
            </div>
          </div>
        </div>
      </div>
</div>


{/* end of persona*/}


{/* user test*/}

    <div className='sectionPanel col-12'>
        <div className='section image'>USER TESTING</div>
         <div className='subtitle entry content'>Test Flow</div>
        <img className='fitImage' src='assets/p2/p2_6.jpg' data-rjs="2"/>

 <div className='row'>
      <div className='col-12 col-md-6'>
          <div className='font-weight-bold content'>Target User</div>
             <div className='entry content'>
              Age group : 25~50 <br/>
              Status : Single / Married <br/>
              Tech savvy: Mid-High <br/>
              Occupation: Student/ Worker <br/>
              Interest: Cooking / Environment <br/>
            </div>  
      </div> 

      <div className='col-12 col-md-6'>
          <div className='font-weight-bold content'>Test Group</div>
      <div className='entry content'>
          Test Date: 19, OCT. <br/>
          Number of participants : 5  <br/>
          Gender: Female 4 / Male 1 <br/>
          Age group : 25~30  <br/>
          Status : Single  <br/>
          Tech savvy: High <br/>
          Occupation: Student <br/>
          Interest:  Design / Arts</div>
     </div> 
  </div>

        <div className='col-12'>
          <div className='font-weight-bold content'>Script</div>  
          <div className='entry content'>
          Open the app and check the ingredient. Set the product list by nearby you. Is it easy to set the list?<br/>
          Explore the list and choose what you need or want. Why did you choose that product? Is it enough information for choosing the product on the list page?<br/>
          Check the product page. Is it enough information for choosing the product? <br/>
          Request the product to seller. What information do you more want for the request? 
          </div>
          <img className='fitImage' src='assets/p2/p2_7.jpg' data-rjs="2"/>
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
            <source src="assets/p3/showmeid_BinaKim_1.mp4" type="video/mp4" />
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
