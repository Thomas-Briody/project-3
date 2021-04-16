# Project-3 - Stepladder <img src='https://i.imgur.com/uXhmA4D.png' width="60"/>

<h1>Overview</h1>

The Brief for this project was to build a MERN stack application utilising:

* <strong>M</strong>ongoDB - document database
* <strong>E</strong>xpress(.js) - Node.js web framework
* <strong>R</strong>eact(.js) - a client-side JavaScript framework
* <strong>N</strong>ode(.js) - the premier JavaScript web server

Working in a group of 4, it was decided that we create a job recruitment website, similar to Glassdoor. The focus would be to allow two main types of user, either a job seeker or company administrator, to login. The options available depend on the type of user that logs in, with job seekers being able to apply for jobs, and rate/comment on companies that they have worked for. Company Admins are able to post new job listings, and delete job listings. A Moderator account was also created that is able to do all of these things, as well as deleting company profiles if required. 

-----
<h2>Brief</h2>

* Work in a team, using **git to code collaboratively**.
* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** 
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for _at least_ one RESTful resource on the back-end. 

<h2>Approach</h2>

<h4>Planning and setup</h4>

Ensuring we followed the brief, the team discussed our initial ideas before agreeing on the idea of a job search website. Once this had been confirmed, we began outlining the pages that would be required to achieve the final product we were aiming for.

<img src='https://i.imgur.com/GtHNPf6.png' width="650"/>

We decided to split the process into stages, for efficiency and to ensure that nothing was missed when setting up the back-end. Splitting up the process also allowed each member of the team to work on a different aspect of the setup, which allowed us to complete this on day 1. This in turn gave us more time to focus on the front-end and design of the website. 

<img src='https://i.imgur.com/S8766wJ.png' width="465"/> <img src='https://i.imgur.com/bqBbL6h.png' width="305"/> <img src='https://i.imgur.com/p9RUHws.png' width="140"/>

<h4>Data</h4>

Company data  was hard-coded, with fake companies and logos being created individually. We wanted each company to have 3 job listings which were stored as an array of objects inside the company object itself. User data was also created, with a mixture of job seekers and company administrators. 1 Moderator user account was also created, and we differentiated this user by adding `isAdmin: { type: Boolean }` to the user schema (without making this a requirement) and adding `isAdmin: true` to the moderator user. 

<h4>Routes</h4>

The routes were set out as below in order to keep the project as neat as possible.

<img src='https://i.imgur.com/Xgduglm.png' width="460"/> <img src='https://i.imgur.com/z6uAbx6.png' width="480"/>

<h4>Front-end</h4>

From the start of the project, the vision was to create a clean and minimal website that is easy to navigate from the user perspective. We chose Bulma as the CSS Framework to use as it is known for its simple aesthetic, and the team all had experience of using Bulma previously. Each page on the site was separated out into its own component, with each member of the team working on a different page at any given time. My focus during this project was on the Navigation bar, the Companies page, and the individual company page, and as such I spent the majority of my time working on these elements. I did also assist with the Jobs page and individual job page.

One of my goals was to ensure that the website was responsive and adapts to changing screen sizes. I believe I have achieved this, as the navigation bar collapses when below a set width, and the company cards reduce depending on the side of the screen. Below I have provided screenshots showing how the page looks, and outlining how the cards reduce in number from 4 down to 1 depending on the screen size.

<img src='https://i.imgur.com/oBJeEoP.png' width="470"/><img src='https://i.imgur.com/z64Q0oI.png' width="430"/>

<img src='https://i.imgur.com/vUI1QVy.png' width="470"/><img src='https://i.imgur.com/SS1uQrc.png' width="350"/>


<h2>Challenges</h2>

* The Main challenge with this project was having two different types of user, with different permissions and abilities. Differentiating these two user types proved difficult and a large amount of time was spent refining the code until this was working effectively. 
* Getting the comments and rating features working also proved troublesome, specifically with regards to allowing job seekers to post comments and rate companies while blocking company administrators from doing the same: 

```  async function handleComment() {

    try {
      await axios.post(`/api/company/${id}/comment`, { text }, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          setText('')
          updateCompany(resp.data)
        })
    } catch (err) {
      console.log('TYPE', type)
      if (type === 'company-admin') {
        updateError('Companies cannot post comments!')
      } else {
        updateError('Please login to post a comment')
      }
    }
  }
  ```

<h2>Conclusion</h2>
I really enjoyed this project, and working with the team to create the final website. I feel that the aim of creating a clean and easy-to-navigate website has been achieved. Throughout this project, my knowledge of React improved, as well as my knowledge of Bulma. I found that the back-end was relatively easy to set up also. More time to finish off the front-end would have been appreciated, however overall I am happy with the final website that we created. 

As we were able to implement the back-end relatively quickly, we were afforded time to add in features that were initially marked as stretch goals, such as the rating system and the carousel on the home page, which add a lot to the overall feel of the website. 
