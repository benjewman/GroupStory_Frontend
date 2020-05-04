import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import WriteStory from './containers/WriteStory';
import ShowStory from './containers/ShowStory';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  
  return (
    <div>
      <Navbar bg="info" variant="dark" >
        <Navbar.Brand href="/">GroupStory</Navbar.Brand>
      </Navbar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/stories/:storyId" component={ShowStory} />
          <Route path="/new" component={WriteStory} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
