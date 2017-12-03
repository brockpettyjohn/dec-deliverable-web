import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Unit1 from './components/unit_1/Unit_1.js'
import Unit2 from './components/unit_2/Unit_2.js'
import LessonPlan from './components/unit_1/LessonPlan.js'
import ZooVideo from './components/unit_1/ZooVideo.js'
import Song from './components/unit_1/Song.js'
import Printout1 from './components/unit_1/Printout1.js'
import Printout2 from './components/unit_1/Printout2.js'
import LessonPlan2 from './components/unit_2/LessonPlan2.js'
import Video2 from './components/unit_2/Video.js'
import Song2 from './components/unit_2/Song.js'
import Printout1Two from './components/unit_2/Printout1Two.js'
import Printout2Two from './components/unit_2/Printout2Two.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/unit1' component={Unit1} />
          <Route exact path='/unit2' component={Unit2} />
          <Route exact path='/lesson' component={LessonPlan} />
          <Route exact path='/zoovideo' component={ZooVideo} />
          <Route exact path='/song' component={Song} />
          <Route exact path='/printout1' component={Printout1} />
          <Route exact path='/printout2' component={Printout2} />
          <Route exact path='/lesson/2' component={LessonPlan2} />
          <Route exact path='/zoovideo/2' component={Video2} />
          <Route exact path='/song/2' component={Song2} />
          <Route exact path='/printout1/2' component={Printout1Two} />
          <Route exact path='/printout2/2' component={Printout2Two} />
          <div className='links'>
            <Link to='/unit1'>Unit1</Link>
            <Link to='/unit2'>Unit2</Link>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
