// building custom components that we can automate the process of allowing users to see certain components
import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

// whether or not a user is logged in
// creating this to pass this information as a prop
const mapStateToProps = (state) => {
    // returning a POJO with key (loggedIn) -> boolean whether we have a currentUser in state
    return {
        loggedIn: Boolean(state.session.currentUser)
    }
};

// Auth Route --> <AuthRoute path="" component={} />
// redirect our users if they are logged in to the homepage
// functional component -> getting loggedIn from mapStateToProps
const Auth = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
        //if they are logged in we redirect to root or if they are not then we render the component
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
    />
);

// ProtectedRoute
const Protected = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
        //if we are logged in we want to display the component or if they are not we redirect to Sign Up
        loggedIn ? <Component {...props} /> : <Redirect to='/signup' />
    )}
    />
);

//use withRouter to give access to location/history/match
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));


