import React from "react";

class EditProfileForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.profile;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const profile = this.props.getProfile(this.props.match.params.profileid)
        return profile;
    }

    handleSubmit(e){
        e.preventDefault();
        // call the editAction
        // redirect to /profiles/edit
    }

    render() {
        const profile = this.componentDidMount();

        return (
            <div>
                <div className="header">
                    <img src={logoUrl} alt="" />
                </div>
                <div className="edit-profile-main-container">
                    <div className="edit-profile-description">
                        <h1>{this.props.formType}</h1>
                        <h3>Edit the name for this profile!</h3>
                    </div>
                    <div className="edit-profile-form">
                        <div className="profile-avatar">
                            <img src={profileURL} alt="" />
                        </div>
                        <div className="edit-profile-name-input">
                            <input type="text" value={profile.name} placeholder="Name" />
                        </div>
                    </div>
                    <button>Save</button>
                    <button>Cancel</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
};

export default EditProfileForm;