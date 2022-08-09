import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // this is to make sure we have a variable we can use
  let preloadedState = undefined;
  // if inside of application.html.erb -> we set winow.currentUser to a valid object
    // we want this currentUser to be the user in our preloadedState
    // this is bootstrapping the currentUser to the window
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  // const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
})