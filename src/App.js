import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import WriteStory from './containers/WriteStory';

function App() {
  return (
    <div>
      <h1>Group Story</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/write" component={WriteStory} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
