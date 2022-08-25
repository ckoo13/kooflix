import React from 'react'
import { Link } from 'react-router-dom'

const Splash = () => {
  return (
    <div className='splash-container'>
        <div className='splash-background'>
            <img id='splash-background-image' src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/splash.jpg" alt="" />
        </div>
        <div className='splash-header'>
            <div className='splash-header-left'>
                <img id="splash-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/logo.png" alt="" />
            </div>
            <div className='splash-header-right'>
                <a href="https://www.linkedin.com/in/calvin-koo-9aa869158/">
                    <img id="splash-linkedin-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/linkedin.png" alt="" />
                </a>
                <a href="https://github.com/ckoo13">
                    <img id="splash-github-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/github.png" alt="" />
                </a>
                <Link to={'/login'}>
                    <button id='splash-header-button'>Sign In</button>
                </Link>
            </div>
        </div>
        <div className='splash-main-content'>
            <div className='splash-main-content-text'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Click the button below to give it a try!</h3>
                <Link to={'/signup'}>
                    <button id='splash-content-button'>Get Started</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Splash;
