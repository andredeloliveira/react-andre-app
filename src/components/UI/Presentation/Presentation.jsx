import React from 'react';
import './Presentation.css';

const Presentation = (props) => (
  <a href='/'>
    <div className='main-container'>
      <p className='name-container'>
        {props.name}
      </p>
      <p className='description-container'>
        {props.description}
      </p>
    </div>
  </a>
);

export default Presentation;