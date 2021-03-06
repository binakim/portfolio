import React, { Component } from 'react';

import ProjectNav from './ProjectNav';
import retina from 'retinajs';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

class ProjectB extends Component {
  componentDidMount() {
    retina();
  }

  render() {
    return (
      <div className='project p2'>
        <div className='col-12'>
          <div className='fullWidthBoundHeightPanel gd2'>
            <div className='fullWidthYShift'>
              <img src='assets/p2.png' data-rjs="2"/>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-5 projectTitle'>
          <div className='topPanelCategory'>UI / UX Design</div>
          <div className='topPanelTitle'>Social Table</div>
          <div className='topPanelDescription'>Social table is an app that provides a social container for reducing food waste.</div>
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
            <img className='fitImage' src='assets/p2/p2_1.png' data-rjs="2"/>
        </div>

        <div className='sectionPanel col-12'>
          <div className='fullImage grayBackground'>
            <img className='' src="assets/p2/p2_17.jpg" data-rjs="2"/>
          </div>
        </div>

        <div className='sectionPanel col-12'>
          <div className='section image'>COMPETITORS</div>
          <img className='fitImage' src='assets/p2/p2_2.jpg' data-rjs="2"/>
        </div>

        <div className='sectionPanel col-12'>
          <div className='section textOnly'>Findings</div>
          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Reliable contents</div>         
            </div>
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Good</div>
              <div className='subtitle entry content'>Meal sharing </div>
              <div className='content'>
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
              <div className='content'>
                There is no review for the foods. If it has reviews, it would help to choose the foods. 
              </div>
            </div>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_3.jpg' data-rjs="2"/>
          </div> 
          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Various reducing food waste methods</div>         
            </div> 
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Good</div>
              <div className='subtitle entry content'>Food Runners </div>
              <div className='content'>
                They are helping individuals and companies to make food donations easier through food pickup service.
    As a food pickup volunteer, you can help this company.
    Restaurants You can donate food in a variety of ways, including food and homemade food.
              </div>  
              <div className='subtitle entry content'>Food For All </div>
              <div className='content'>
                Each time you participate in the service, you earn points to give additional benefits.
    In addition to food donations, user can add donations to organizations, or donate money.
              </div> 
            </div>  
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Bad</div>
              <div className='subtitle entry content'>Food Runners</div>
              <div className='content'>
    To make a donation, you must call the organization.
              </div>
              <div className='subtitle entry content'>Food for all</div>
              <div className='content'>
    The service is only available in Boston and New York.
              </div>
            </div>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_4.jpg' data-rjs="2"/>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Intuitive design</div>         
            </div> 
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Good</div>
              <div className='subtitle entry content'>Food For All </div>
              <div className='content'>
                Create intuitive and intuitive design through illustrations and icons.
    The most important buttons in the page are designed to be noticeable.
              </div> 
            </div>  
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Bad</div>
              <div className='subtitle entry content'>Food Runners</div>
              <div className='content'>
                Old-looking page design
              </div>
            </div>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_5.jpg' data-rjs="2"/>
          </div>    
        </div> 











        <div className='sectionPanel col-12'>
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
              <div className='persona_quote'>“I do not want to waste food during the test or vacation.”</div>
              <div className='persona_env'>Bio</div>
              <div className='persona_text'>She is a college student majored business. she is from India originally, and she likes cooking indian food. Sometimes she cooks food and brings that at school. She likes sharing her recipe with her friends and cooking together. Also, she buys ingredients for cooking with her roommates because they can save money. 
    Sometimes they exchange their remaining ingredients.</div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>She doesn’t want to abandon the remaining food ingredients. She want to save money on buying food ingredients.
              </div>
              <div className='persona_env'>Frustration</div>
              <div className='persona_text'>At the end of the test period, there is no time to cook and the remaining food items are discarded. When I go to my hometown during vacation, there are many food ingredients that can not be eaten anymore.</div>
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
              <div className='persona_quote'>“Because I cook only on weekends, the leftovers often go bad.”</div>
              <div className='persona_env'>Bio</div>
              <div className='persona_text'>He is a software engineer in San Francisco. He eats breakfast, lunch at work, and dinner sometimes at home. However, when there is a lot of meetings, he has dinner outside. He is interested in cooking recently, so sometimes cook on weekends. He commutes by bicycles because he is interested in environmental protection.</div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>He wants to learn how to use food ingredients. He wants to donate food that he doesn’t use. He doesn’t want to waste foods from cooking on weekend.</div>
              <div className='persona_env'>Frustration</div>
              <div className='persona_text'>There are some ingredients that he doesn’t know about that ,so he doesn’t use and discarded. There are a lot of food ingredients go bad, becuase hecan not cook often.</div>
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
              <div className='persona_quote'>“I forgot what I bought many times, because I bought many foods at once.”</div>
              <div className='persona_env'>Bio</div>
              <div className='persona_text'>She is a college instructor teachs biology. She lives with her 13- and 8-year-old two sons and her husband. She goes to school three times a week and teach students. She usually has dinner at home with her family. She is too busy to go shopping often, so she buy lots of food ingredients at once. she lives in an apartment for a long time, know my neighbors well, and sometimes have a barbecue.</div>
              <div className='persona_env'>Goal</div>
              <div className='persona_text'>She want to share the left ingredients with neighbors.</div>
              <div className='persona_env'>Frustration</div>
              <div className='persona_text'>She often throws away leftovers from the refrigerator.There are many food ingredients that pass the expiration date after purchasing, because she bought a lot of foods and sometimes forgot it.</div>
            </div>
          </div>
        </div>

    {/*ideation*/}


        <div className='sectionPanel col-12'>
          <div className='section image'>IDEATION</div>
          <div className='subtitle content'>Brainstoming with crazy 8's </div>
          <img className='fitImage sectionImage' src='assets/p2/p2_12.jpg' data-rjs="2"/>

          <div className='col-12'>
          <div className='subtitle content'>Results</div>  
          <div className='subtitle content'>Donation Box</div>  
          <div className='content'>
          Deliver the donation box to user who requested the donation on the app. Put the food ingredient in the box, and sent the box to the company by free.
          </div>
          <div className='subtitle content'>Cooking event</div>
           <div className='content'>
          Having cooking event with neighbors. Give some notification about event. User bring their left over foods or ingredients and volunteers teach how to cook.  
          </div>
          <div className='subtitle content'>Pick up request</div>
          <div className='content'>
          Many left over food you have after party? User can request to pick up foods for donation.
          </div>
          </div>
        </div>


    {/*survey*/}

        <div className='sectionPanel col-12'>
          <div className='section textOnly'>SURVEY</div>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='subtitle entry content'>Survey date</div>
              <div className='content'>
              20-21, Oct., 2018 </div>
              <div className='subtitle entry content'>Number of Participants</div>
              <div className='content'>
              21 (Female 85% / Male 15%) </div>
              <div className='subtitle entry content'>Status</div>
              <div className='content'>
              Single  80%, Couple 20% </div>
              <div className='subtitle entry content'>Google Form Link</div>
              <div className='content'>
               https://goo.gl/forms/igZIQZ6Va9hy0CLA2</div>
            </div>  
            <div className='col-12 col-md-6'>
               <div className='subtitle entry content'>Findings</div>
              <div className='content'>
                More than 50% of participants make food waste because <br/>
                “Busy, or they for got the expiration date” 
              </div>
              <div className='content'>
                47% of participants had experience of donation food.
              </div>
              <div className='content'>
                More than 50% of participants like share foods with friends. 
              </div>
              <div className='content'>
                72% of participants Won’t use the app because <br/>
                “I can’t believe other people.”
              </div>
              </div>
               <div className='col-12'>
               <img className='fitImage sectionImage' src='assets/p2/p2_8.jpg' data-rjs="2"/>
            </div>
            </div>
          </div>

    {/*idea sketch*/}
        <div className='sectionPanel col-12'>
            <div className='section image'>Sketch</div>
            <img className='fitImage' src='assets/p2/p2_13.jpg' data-rjs="2"/>
        </div>


    {/*IA*/}
        <div className='sectionPanel col-12'>
            <div className='section image'>INFORMATION ARCHITECTURE</div>
            <img className='fitImage' src='assets/p2/p2_14.jpg' data-rjs="2"/>
        </div>


    {/*task flow*/}

          <div className='sectionPanel col-12'>
              <div className='section image'>TASK FLOW</div>
              <div className='subtitle content'>Share the ingredients</div>
               <div className='sectionImage'>
               <img className='fitImage' src='assets/p2/p2_9.jpg' data-rjs="2"/>
               </div>
               <div className='subtitle content'>Get the ingredients</div>
               <div className='sectionImage'>
               <img className='fitImage' src='assets/p2/p2_10.jpg' data-rjs="2"/>
               </div>
               <div className='subtitle content'>Apply the volunteer</div>
               <div className='sectionImage'>
               <img className='fitImage' src='assets/p2/p2_11.jpg' data-rjs="2"/>
               </div>
          </div>


    {/*user testing*/}

        <div className='sectionPanel col-12'>
          <div className='section image'>USER TESTING</div>
          <div className='subtitle content'>Test Flow</div>
          <img className='fitImage' src='assets/p2/p2_6.jpg' data-rjs="2"/>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Target User</div>
              <div className='content'>
                Age group : 25~50 <br/>
                Status : Single / Married <br/>
                Tech savvy: Mid-High <br/>
                Occupation: Student/ Worker <br/>
                Interest: Cooking / Environment <br/>
              </div>  
            </div> 
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Test Group</div>
              <div className='content'>
                Test Date: 19, OCT. <br/>
                Number of participants : 5  <br/>
                Gender: Female 4 / Male 1 <br/>
                Age group : 25~30  <br/>
                Status : Single  <br/>
                Tech savvy: High <br/>
                Occupation: Student <br/>
                Interest:  Design / Arts
              </div> 
            </div>
            <div className='col-12'>
              <div className='font-weight-bold content'>Script</div>  
              <div className='content'>
              Open the app and check the ingredient. Set the product list by nearby you. Is it easy to set the list?<br/>
              Explore the list and choose what you need or want. Why did you choose that product? Is it enough information for choosing the product on the list page?<br/>
              Check the product page. Is it enough information for choosing the product? <br/>
              Request the product to seller. What information do you more want for the request? 
              </div>
              <img className='fitImage sectionImage' src='assets/p2/p2_7.jpg' data-rjs="2"/>
            </div>
            <div className='col-12'>
              <div className='font-weight-bold content'>Result</div>
              <div className='subtitle entry content'>Improve </div>
              <div className='content'>
                Provide reliable contents ( product/ profile)<br/>
                Exact request system ( date,time set )
              </div>
              <div className='subtitle entry content'>New discoveries </div>
              <div className='content'>
                Product location is important for the user.<br/>
                User can donation, but they won’t get the products.
              </div>
              <div className='subtitle entry content'>Similar behaviors</div>
              <div className='content'>
                The user  wants to get the packaged products. 
              </div>
            </div>
          </div>
        </div>


    {/*wireframe*/}
        <div className='sectionPanel col-12'>
            <div className='section image'>WIREFRAME</div>
            <img className='fitImage' src='assets/p2/p2_15.jpg' data-rjs="2"/>
        </div>

    {/*final*/}
        <div className='sectionPanel col-12'>
            <div className='section image'>FINAL DESIGN</div>
            <img className='fitImage' src='assets/p2/p2_16.jpg' data-rjs="2"/>
        </div>
    </div>

        <ProjectNav 
          prev={{
            href: '/project-a',
            className: 'gd1',
            imgUrl: 'assets/p1.png',
            category: 'UI / UX Design',
            title: 'I was here'
          }}
          next={{
            href: '/project-c',
            className: 'gd3',
            imgUrl: 'assets/p3.png',
            category: 'UI / UX Design',
            title: 'Show me ID'
          }}
        />
      </div>
    );
  }
}

export default ProjectB;
