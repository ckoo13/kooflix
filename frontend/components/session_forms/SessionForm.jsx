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
            .then(() => this.props.history.push('/profiles'))
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
        const demo = {email: 'demouser@gmail.com', password: 1234567}

        const speed = 150;

        // demo login fill in input fields
        // if (this.state.email !== demo.email) {
        //          const inputUsername = setInterval(() => {
        //              if (this.state.email !== demo.email) {
        //                  const temp = demo.email.slice(0, this.state.email.length + 1);
        //                  this.setState({ email: temp })
        //              } else {
        //                  clearInterval(inputUsername);
        //                  animatePW();
        //              }
        //          }, speed)
        //      }
        //      const animatePW = () => {
        //          if (this.state.password !== demo.password) {
        //              const inputPassword = setInterval(() => {
        //                  if (this.state.password !== demo.password) {
        //                      const temp = demo.password.slice(0, this.state.password.length + 1);
        //                      this.setState({ password: temp });
        //                  } else {
        //                      clearInterval(inputPassword);
        //                      this.props.processForm(demo).then(() => this.props.history.push('/profiles'));
        //                  }
        //              }, speed);
        //          }
        //      }

        this.props.processForm(demo)
            .then(() => this.props.history.push('/profiles'))
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
                    <img id="session-splash-background" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/splash.jpg" alt="" />
                </div>
                {/* header */}
                <div className='session-header'>
                    {/* this image is a placeholder for now */}
                    <Link to={'/'}>
                        <img id='session-splash-logo' src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/logo.png" alt="" />
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
