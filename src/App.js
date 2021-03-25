import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TalentPool from './components/pages/TalentPool';
import BriLifeTalks from './components/pages/BriLifeTalks';
import Assesment from './components/pages/Assesment';
import Lms from './components/pages/Lms';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/TalentPool' exact component={TalentPool} />
          <Route path='/BriLifeTalks' component={BriLifeTalks} />
          <Route path='/Assesment' component={Assesment} />
          <Route path='/Lms' component={Lms} />
          <Route path='/SignUp' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
