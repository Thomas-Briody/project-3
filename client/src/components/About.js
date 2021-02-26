import React from 'react'


export default function About() {
  //*this is a comment

  return <div className="about-section">
    <div className="columns m-6">
      <div className="column is-half">
        <h1 className="title is-3">About this website</h1>
        <section>This website was created as part of a project by 4 General Assembly Software Engineering Immersive students. Using git to code collaboratively, we were tasked with building a full-stack application.</section>
        <br></br>
        <h1 className="title is-5">Created by:</h1>
        <a href="https://github.com/clem-code" className="title is-5 has-text-danger m-2">Clement Knox</a>
        <br></br>
        <br></br>
        <a href="https://github.com/lydiarrrw" className="title is-5 has-text-danger m-2">Lydia Wood</a>
        <br></br>
        <br></br>
        <a href="https://github.com/ZVesna" className="title is-5 has-text-danger m-2">Vesna Zivanovic</a>
        <br></br>
        <br></br>
        <a href="https://github.com/Thomas-Briody" className="title is-5 has-text-danger m-2">Thomas Briody</a>

      </div>
      <div className="column is-half">
        <h1 className="title is-3">Technologies Used</h1>
        <img src='https://i.imgur.com/sdCJjmy.jpg' style={{ height: 100, width: 200, margin: 15 }}></img>
        <img src='https://i.imgur.com/tIaEK6c.png' style={{ height: 100, width: 200, margin: 15 }}></img>
        <img src='https://i.imgur.com/cux6VFt.png' style={{ height: 130, width: 200, margin: 15 }}></img>
        <img src='https://i.imgur.com/kmWQ8XC.png' style={{ height: 150, width: 100, marginLeft: 40, marginTop: 15 }}></img>
      </div>
    </div>
  </div>
}