import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';
import './NavigationBar.css';

class NavigationBar extends React.PureComponent {

  static propTypes = {
    links: PropTypes.instanceOf(List),
    onClick: PropTypes.func
  };

  handleClick = (item, event) => {
    const {onClick} = this.props;
    onClick && onClick(item.toLowerCase());
  }


  _renderItems = () => {
    const {items} = this.props;
    return items.map(item => {
      return (
        <li 
          key={item}
          onClick={this.handleClick.bind(this, item)}
          className='navbar-item'>
          {item}
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