import React, { Component } from 'react';
import logo from './squidlogo-nobg.png';
import meeting from './meeting.svg'
import calendar from './calendar.svg';
import needle from './needle.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="main-content">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Squid</h1>
            <h2>Focus on what's important</h2>
          </div>
        </div>
        <section className="solutions">
          <div className="solution">
            <img src={meeting}></img>
            <p>We build the MVP with you. As experienced entrepreneurs we can help you define the minimum functionalities that you need to validate your idea.
</p>
          </div>
          <div className="solution">
            <img src={calendar}></img>
            <p>We divide the project in 2-week sprints, we want you to be updated during the whole process. This way we will deliver the platform you always wanted
</p>
          </div>
          <div className="solution">
            <img src={needle}></img>
            <p>Tailored costs, we budget the project depending on its complexity. It’s only fair.
  </p>
          </div>
        </section>
        <hr></hr>
      </div>
    );
  }
}

export default App;
