import React from "react";
import { Link, Redirect } from "react-router-dom";
import NavBarContainer from "../navbar/NavBarContainer";

class ProfileIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getProfiles(this.props.currentUser);
    }

    renderProfiles() {
        const { profiles } = this.props

        return (
            profiles.map((profile) => {
                return (
                    <li key={profile.id}>
                        <div>
                            <Link className="profile-image-link" to={'/browse'}>
                                <div className="avatar-wrapper">
                                    <img className="profile-image" src={profileURL} alt="" />
                                    <p className="profile-image-name">{profile.name}</p>
                                </div>
                             </Link>
                        </div>
                    </li>
                )
            })
        )
    }

    render() {
        const renderProfiles = this.renderProfiles()

        return (
            <div className="profiles-index-main-container">
                <div className="profiles-header">
                    <Link to={'/browse'}>
                        <img className="profiles-splash-logo" src={logoUrl} alt="" />
                    </Link>
                </div>
                <div className="profiles-gate-container">
                    <div className="profiles-index-container">
                        <h1>Who's watching?</h1>
                        <div className="profiles-images-container">
                            <ul className="profiles-images-list">
                                {renderProfiles} 
                            </ul>
                        </div>
                        <button id="manage-profiles-button">Manage Profiles</button>
                    </div>
                </div>
                {/* delete later this is the logout button */}
                <NavBarContainer />
            </div>
        )
    }
}

export default ProfileIndex;