import React from "react";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            color: false
        }

        this._dropdownProfiles = this._dropdownProfiles.bind(this)
        this._changeColor = this._changeColor.bind(this)
    }

    componentDidMount() {
        this.props.getProfiles(this.props.currentUser)
        this.props.getCurrentProfile(this.props.currentProfile)
        window.addEventListener('scroll', this._changeColor)
    }

    _handleProfileClick(e, id) {
        e.preventDefault();
        this.props.getCurrentProfile(id)
            .then(() => this.props.history.push('/browse'));
    }

    _changeColor = () => {
        if (window.scrollY >= 150) {
            this.setState({color: true})
        } else {
            this.setState({color: false})
        }
    }

    _dropdownProfiles() {
        return this.props.profiles.map(profile => {
            if (this.props.currentProfile != profile.id) {
                return (
                    <li key={profile.id} id="dropdown-profiles-li">
                        <img onClick={(e) => this._handleProfileClick(e, profile.id)} className="navbar-profile-image" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/profile_icon_default.png" alt="" />
                        <p id="dropdown-profiles-name" onClick={(e) => this._handleProfileClick(e, profile.id)} >{profile.name}</p>
                    </li>
                )
            }
        })
    }

    render() {
        return (
            <header className={this.state.color ? "navbar-container" : "navbar-container-bg"}>
                <div className="navbar-left">
                    <Link to={'/browse'}>
                        <img id='navbar-logo' src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/logo.png" alt="" />
                    </Link>
                    <div className="navbar-left-links">
                        <Link className="navbar-left-link" to={'/browse'}>Home</Link>
                        {/* fix these routes later */}
                        <Link className="navbar-left-link" to={'/shows'}>Shows</Link>
                        <Link className="navbar-left-link" to={'/movies'}>Movies</Link>
                        <Link className="navbar-left-link" to={'/myList'}>My List</Link>
                    </div>
                </div>

                <div className="navbar-right-container">
                    <a href="https://www.linkedin.com/in/calvin-koo-9aa869158/">
                        {/* fix this to AWS hosting */}
                        <img id="splash-linkedin-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/linkedin.png" alt="" />
                    </a>
                    <a href="https://github.com/ckoo13">
                        <img id="splash-github-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/github.png" alt="" />
                    </a>
                    <div id="dropdown">
                        <img className="navbar-profile-image" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/profile_icon_default.png" alt="" />
                        <ul id="dropdown-links">
                            {this._dropdownProfiles()}
                            <li className="dropdown-link"><Link id="dropdown-manage-profiles" to={'/profiles/edit'}>Manage Profiles</Link></li>
                            <li><div id="line"></div></li>
                            <li className="dropdown-link"><Link id="dropdown-signout" onClick={this.props.logout} to={'/'}>Sign out of Kooflix</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(NavBar);