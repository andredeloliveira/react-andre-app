import React from 'react';
import './Presentation.css';

const Presentation = ({name, description}) => (
  <div className='main-container'>
    <div className='name-container'>
      {name}
    </div>
    <div className='description-container'>
      {description}
    </div>
  </div>
);

export default Presentation;