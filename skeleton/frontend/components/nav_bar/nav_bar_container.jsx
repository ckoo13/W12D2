import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

//allows us to create a button to logout
import { logout } from '../../actions/session';


const mapStateToProps = state => ({
    //making sure we are passing down the current user from our state to our nav_bar component
  currentUser: state.session.currentUser,
});

//make sure that we pass out logout action from our session actions to our nav_bar component
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
