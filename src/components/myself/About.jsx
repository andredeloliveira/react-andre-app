import React from 'react';
import './about.css';

const About = () => (
  <div className='about'>
    <p>Hi! I actually love to build software</p>
    <br />
    <h3> Technologies that I enjoy working with</h3>
    <ul>
      <li>
        Javascript <span className='span-list'>(ES6, Node.js, Serverless and of course,</span> <span className='wow'>React and React Native</span>) 
      </li>
      <li>
        Elixir <span className='span-list'>(Phoenix, OTP and all the beautiful</span> <span className='wow'>functional programming</span>)
      </li>
      <li>
        C# - <span className='wow'>I had my good momments with it</span>
      </li>
    </ul>

  </div>
);

export default About;