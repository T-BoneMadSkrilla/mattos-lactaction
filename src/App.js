import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import TopNav from './components/topNav/TopNav';
import mainRoutes from './routes/mainRoutes';
import BottomNav from './components/bottomNav/BottomNav';

class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <TopNav/>
       {mainRoutes}
        <BottomNav/>
      </div>
      </Router>
    );
  }
}

export default App;
