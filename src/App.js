import React, { Component } from 'react';
import Presentation from './components/UI/Presentation/Presentation';
import NavigationBar from './components/UI/NavigationBar/NavigationBar';
import SourceCodeContainer from './components/UI/SourceCodeContainer/SourceCodeContainer';
import {List} from 'immutable';

const navigationItems = List([
  'About', 'Projects', 'Social'
]);

class App extends Component {

  constructor() {
    super();

    this.state = {
      content: null
    };

  }

  selectContent = (content) => {
    console.log(content)
    this.setState({content})
  };

  render() {
    const {content} = this.state;
    return (
      <div className="App">
        <Presentation 
          name='Andre de Oliveira'
          description='Full-stack Software Engineer'
        />
        <div>
          <NavigationBar 
            items={navigationItems}
            onClick={this.selectContent}
          />
          <SourceCodeContainer 
            content={content}
          />     
        </div>
      </div>
    );
  }
}

export default App;
