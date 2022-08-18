import React from "react";
import { Link, Redirect } from "react-router-dom";

class ProfileIndex extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getProfiles(this.props.currentUser);
    }

    handleSubmit(e, id) {
        e.preventDefault();
        this.props.getCurrentProfile(id)
            .then(() => this.props.history.push('/browse'));
    }

    renderProfiles() {
        const { profiles } = this.props

        return (
            profiles.map((profile) => {
                return (
                    <li key={profile.id}>
                        <div>
                            <Link onClick={(e) => this.handleSubmit(e, profile.id)} className="profile-image-link" to={'/browse'}>
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
                    <img className="profiles-splash-logo" src={logoUrl} alt="" />
                </div>
                <div className="profiles-gate-container">
                    <div className="profiles-index-container">
                        <h1>Who's watching?</h1>
                        <div className="profiles-images-container">
                            <ul className="profiles-images-list">
                                {renderProfiles}
                                <li>
                                    <div>
                                        <Link className="profile-image-link" to={'/profiles/new'}>
                                            <div>
                                                <img className="profile-image" src={addProfileURL} alt="" />
                                                <p className="profile-image-name">Add Profile</p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* this might have to be an event handler later */}
                        <Link id="manage-profiles-link" to={'/profiles/edit'}>
                            <button id="manage-profiles-button">Manage Profiles</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileIndex;