import React from 'react';

const fullImageStyle = (url) =>  ({
  backgroundImage: `url(${url})`,
  height: '700px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});

const FullScreenImage = ({imageUrl, id, children}) => (
  <div style={fullImageStyle(imageUrl)} id={id}>
    {children}
  </div>
);

export default FullScreenImage;