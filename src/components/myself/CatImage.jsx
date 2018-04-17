import React from 'react';
import './cat.css';
const CatImage = () => (
  <div className='cat-description'>
      <p>This is a lovely cat, isn't it?</p>
      <img className='lovely-cat' src='lovely.jpg' alt='cute kitten' />
      <p>You can click on the navigation bar to know more about me or you can enjoy this extreme cuteness</p>
  </div>
)

export default CatImage;