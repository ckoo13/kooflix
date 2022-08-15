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
                <button onClick={this.demoLogin}>Demo Login</button>
            ) : null

        return (
        <div>
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input type="text" value={this.state.email} placeholder='Email' onChange={this.update('email')} />
                </label>
                <label>Password
                    <input type="password" value={this.state.password} placeholder='password' onChange={this.update('password')} />
                </label>
                <input type="submit" value={this.props.formType} />
                {demoLogin}
                <br/>

                {this.props.navLink}
                {this.renderErrors()}
            </form>
        </div>
    )
  }
}
