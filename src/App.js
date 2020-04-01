import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import WriteStory from './containers/WriteStory';
import ShowStory from './containers/ShowStory';
import { createBrowserHistory } from 'history';

function App() {

  const history = createBrowserHistory();

  const routeToNew = () => history.push('/new');
  
  return (
    <div>
      <h1>Group Story</h1>
      <button onClick={routeToNew}>Be Part of the Story</button>
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
