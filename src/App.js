import React, { Component } from 'react';
import Presentation from './components/UI/Presentation/Presentation';
import NavigationBar from './components/UI/NavigationBar/NavigationBar';
import SourceCodeContainer from './components/UI/SourceCodeContainer/SourceCodeContainer';
import {List} from 'immutable';
import About from '../src/components/myself/About';
import Projects from '../src/components/myself/Projects';
import CatImage from '../src/components/myself/CatImage';
import Social from '../src/components/myself/Social';
import { Switch, Route} from 'react-router-dom';

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
        <NavigationBar items={navigationItems} />
        <Switch>
          <Route exact path='/' component={CatImage} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/social' component={Social} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
