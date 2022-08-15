import React from 'react'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        // redirecting the user after signup/login to a frontend route
            .then(() => this.props.history.push('/'))
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    // removing errors
    componentWillUnmount() {
        this.props.deleteErrors();
    }

    renderErrors() {
        const { errors } = this.props;
        
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    demoLogin() {
        const user = {email: 'demouser@gmail.com', password: 1234567}

        this.props.processForm(user)
            .then(() => this.props.history.push('/'))
    }
  
    render() {
        const demoLogin = this.props.formType === 'Log In' ? 
            (
                <button className= 'session-button' onClick={this.demoLogin}>Demo User</button>
            ) : null

        const redirectText = this.props.formType === 'Log In' ?
                (
                    <p id="session-redirect-text">New to Netflix?</p>
                ) :
                (
                    <p id="session-redirect-text">Already have an account?</p>
                )

        return (
        <div>
            <p>hello</p>
        </div>
    )
  }
}
