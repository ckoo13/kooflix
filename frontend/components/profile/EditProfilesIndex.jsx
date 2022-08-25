import React from "react";
import { Link } from "react-router-dom";

class EditProfilesIndex extends React.Component {
    constructor(props){
        super(props)
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
                            <Link className="profile-image-link" to={`/profiles/${profile.id}/edit`}>
                                <div className="avatar-wrapper">
                                    <img className="profile-image" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/EditProfileIcon.png" alt="" />
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
                    <img className="profiles-splash-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/logo.png" alt="" />
                </div>
                <div className="profiles-gate-container">
                    <div className="profiles-index-container">
                        <h1>Manage Profiles:</h1>
                        <div className="profiles-images-container">
                            <ul className="profiles-images-list">
                                {renderProfiles}
                                <li>
                                    <div>
                                        <Link className="profile-image-link" to={'/profiles/new'}>
                                            <div id="profile-image-edit-container">
                                                <img className="profile-image-edit" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/add_profile.png" alt="" />
                                                <p className="profile-image-name-edit">Add Profile</p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* this might have to be an event handler later */}
                        <Link id="manage-profiles-link" to={'/profiles'}>
                            <button id="edit-profiles-done">Done</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default EditProfilesIndex