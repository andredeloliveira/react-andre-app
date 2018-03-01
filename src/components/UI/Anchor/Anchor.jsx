import React from 'react';
import './Anchor.css';

class Anchor extends React.PureComponent {

  handleClick = () => {
    console.log('clicked');
  }

  render() {
    const {text, url} = this.props;
    return (
      <a href={url} className='main-button'>{text}</a>
    );  
  }
}

  

export default Anchor;