//importing this because we need a way to connect to our Redux store
import { connect } from 'react-redux';
//importing this because this is the signup form
import { createNewUser } from '../../actions/session';
import Signup from './signup';

//does not need to rely on any part of our state so we just need to pass down the action
const mapDispatchToProps = dispatch => ({
    //creating a POJO
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);
