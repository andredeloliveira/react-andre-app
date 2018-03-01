import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import './SourceCodeContainer.css';

const sourceCodeContent = {
  about: (
    <div className='about-container'>
      <Typist>
        $ >
        <span className="front-end">
        Front-End -> {['Javascript, ', 'React, ', 'Redux, ', 'HTML, ', 'CSS, ', 'SCSS']}
        </span>
        <Typist.Delay ms={200} />
        <br />
        $ >
        <span className="back-end">
          Back-End -> Elixir, Serverless, Node.js, Java, AWS, Google Cloud, MongoDB, MySQL, PostgreSQL
        </span>
      </Typist>
    </div>
  ),
  projects: {

  },
  social: {

  }
}

class SourceCodeContainer  extends React.PureComponent {
  static propTypes = {
    content: PropTypes.string
  }

  static defaultProps = {
    content: ''
  }

  _renderSourceCodeContent = (content) => {
    return sourceCodeContent[content];
  }

  render () {
    const {content} = this.props;
    const animation = {
      transitionName: 'animation',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    return (
      <div>
        <div className="menu">
          <div className="buttons"></div>
          <div className="buttons minimize"></div>
          <div className="buttons zoom"></div>
        </div>
        <div className="screen">
          $ > {this._renderSourceCodeContent(content)}
        </div>
      </div>
    )  
  }
}
  
export default SourceCodeContainer;