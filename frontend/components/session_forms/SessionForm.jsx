import React from 'react'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
  
    render() {
        return (
        <div>
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input type="text" value={this.state.email} placeholder='Email' onChange={this.update('email')} />
                </label>
                <label>Password
                    <input type="password" value={this.state.password} onChange={this.update('password')} />
                </label>
                <input type="submit" value={this.props.formType} />
                <br/>

                {this.props.navLink}
                {this.renderErrors()}
            </form>
        </div>
    )
  }
}
