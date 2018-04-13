import React from 'react';
import './Presentation.css';

const Presentation = ({name, description}) => (
  <div className='main-container'>
    <p className='name-container'>
      {name}
    </p>
    <p className='description-container'>
      {description}
    </p>
  </div>
);

export default Presentation;