import React from 'react';

class Signup extends React.Component {
    //local state to keep track of all fields for the form we are building
    constructor(props){
        super(props);
        //state is POJO
        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //actions that form will user
    handleInput(type) {
        //arrow function that will set the state for us
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    //method to handle submitting information to backend
    handleSubmit(e) {
        //need this because default action for button in a form is to make POST request
        //causes a re-render unless we include this
        e.preventDefault();
        this.props.createNewUser(this.state)
            //if we successfully create new user -> callback function that redirects us
                //we don't have access to history until we wrap this whole component in a route
            .then( () => this.props.history.push('/chirps'));
    }

    render () {
        return (
            <div className = 'session-form'>
                <h2>Sign Up!</h2>
                <form>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label>Password:
                        <input type="text" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    {/* problem with calling handleSubmit in onClick because of scope so need to bind this in constructor*/}
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;