import React from 'react';
import {Link} from 'react-router-dom'
import './Presentation.css';

const Presentation = (props) => (
  <Link to='/' style={{textDecoratin: 'none'}}>
    <div className='main-container'>
      <p className='name-container'>
        {props.name}
      </p>
      <p className='description-container'>
        {props.description}
      </p>
    </div>
  </Link>
);

export default Presentation;