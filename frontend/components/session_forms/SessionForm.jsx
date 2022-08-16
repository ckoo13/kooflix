import React from 'react'
import { Link } from 'react-router-dom';

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
            .then(() => this.props.history.push('/browse'))
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
            <ul className='session-errors-container'>
                {errors.map((error, idx) => (
                    <li id="session-errors" key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    demoLogin() {
        const user = {email: 'demouser@gmail.com', password: 1234567}

        this.props.processForm(user)
            .then(() => this.props.history.push('/browse'))
    }
  
    render() {
        const demoLogin = this.props.formType === 'Log In' ? 
            (
                <button className= 'session-button' onClick={this.demoLogin}>Demo User</button>
            ) : null

        const redirectText = this.props.formType === 'Log In' ?
                (
                    <p id="session-redirect-text">New to Kooflix?</p>
                ) :
                (
                    <p id="session-redirect-text">Already have an account?</p>
                )

        return (
        <div>
            <div className='login-wrapper'>
                {/* background img */}
                <div className='login-wrapper-background'>
                    <img id="session-splash-background" src={window.splashUrl} alt="" />
                </div>
                {/* header */}
                <div className='session-header'>
                    {/* this image is a placeholder for now */}
                    <Link to={'/'}>
                        <img id='session-splash-logo' src={window.logoUrl} alt="" />
                    </Link>
                </div>
                {/* signup body */}
                <div className='session-body'>
                    <div className='session-form-container'>
                        <h1 id='session-form-title'>{this.props.formType}</h1>
                        <br/>
                        <form onSubmit={this.handleSubmit} className="session-form">
                            <div className='session-input-container'>
                                <div className='nfInputPlacement'>
                                    <div className='nfEmailControls'>
                                        <input className='session-input-field' type="text" value={this.state.email} placeholder='Email' onChange={this.update('email')} />
                                    </div>
                                </div>
                            </div>
                            <div className='session-input-container'>
                                <div className='nfInputPlacement'>
                                    <div className='nfEmailControls'>
                                        <input className='session-input-field' type="password" value={this.state.password} placeholder='Password' onChange={this.update('password')} />
                                    </div>
                                </div>
                            </div>
                            {this.renderErrors()}
                            <input className='session-button' type='submit' value={this.props.formType} />
                            {demoLogin}
                            <br/>
                            <div className='session-redirect-container'>
                                {redirectText}
                                {this.props.navLink}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
