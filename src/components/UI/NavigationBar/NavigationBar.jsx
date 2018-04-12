import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';
import {Link} from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends React.PureComponent {

  static propTypes = {
    items: PropTypes.instanceOf(List),    
  };



  _renderItems = () => {
    const {items} = this.props;
    return items.map(item => {
      return (
        <li 
          key={item}
          className='navbar-item'>
          <Link to={`/${item.toLowerCase()}`}
            style={{color: 'green', width: '100%'}}
          >{item}</Link>
        </li>
      );
    })
  }

  render() {
    
    return (
      <ul className='navbar-container'>
        {this._renderItems()}
      </ul>
    );
  }
};

export default NavigationBar;