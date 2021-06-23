import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About } from './containers';
import './App.css';

class App extends Component {

  renderRouter = () => {
      return ( 
          <div className='body'>
              <main>
                  <Route path='/' component={Home} exact />
                  <Route path='/about' component={About} exact />
                  
              </main>
          </div>
      )
  }

  render() {
      return (
          <Router >
              <div className='main-wrapper'>            
                {this.renderRouter()}
              </div>
          </Router>
      );
  }
}

export default App;
