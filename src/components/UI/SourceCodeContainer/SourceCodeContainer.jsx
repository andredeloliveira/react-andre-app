import React from 'react';
import PropTypes from 'prop-types';
import './SourceCodeContainer.css';

const sourceCodeContent = {
  about: (
    <div className='about-container'>
      <div className="line">
        Front-End -> {['Javascript, ', 'React, ', 'Redux, ', 'HTML, ', 'CSS, ', 'SCSS']}
      </div>
      <div className="line2">
        Back-End -> Elixir, Serverless, Node.js, Java, AWS, Google Cloud, MongoDB, MySQL, PostgreSQL
      </div>
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
    return (
      <div>
        <div className="menu">
          <div className="buttons"></div>
          <div className="buttons minimize"></div>
          <div className="buttons zoom"></div>
        </div>
        <div className="screen">
        {this._renderSourceCodeContent(content)}
        <div className="line2">><span className="cursor4">_</span></div>
        </div>
      </div>
    )  
  }
}
  
export default SourceCodeContainer;