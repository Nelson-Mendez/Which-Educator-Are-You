import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz/Quiz';
// import Results from '/pages/result';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/result" component={Results} /> */}
          <Route path="/quiz" component={Quiz} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
