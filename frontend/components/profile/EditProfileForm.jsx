import React from "react";
import {Link} from 'react-router-dom';

class EditProfileForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.profile;
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getProfile(this.props.match.params.profileid)
    }

    handleSave(e){
        e.preventDefault();
        this.props.updateProfile(this.state)
            .then(() => this.props.history.push('/profiles/edit'));
        // call updateProfile
        // redirect to /profiles/edit
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeProfile(this.props.profile.id)
            .then(() => this.props.history.push('/profiles/edit'));
        // call removeProfile
        // redirect to /profiles/edit
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        // const {profile} = this.props.getProfile(this.props.match.params.profileid);
        return (
            <div className="edit-profile-form-whole-container">
                <div className="edit-form-header">
                    <img src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/logo.png" alt="" />
                </div>
                <div className="edit-profile-main-container">
                    <div className="edit-profile-description">
                        <h1>{this.props.formType}</h1>
                        <h2>Edit the name for this profile!</h2>
                    </div>
                    <div className="edit-profile-form">
                        <div className="profile-avatar">
                            <img src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/profile_icon_default.png" alt="" />
                        </div>
                        <div className="edit-profile-name-input">
                            {/* insert value={profile.name} later */}
                            <input type="text" placeholder="Name" value={this.state.name} onChange={this.update('name')}/>
                        </div>
                    </div>
                    <div className="edit-profile-buttons-container">
                        <button onClick={(e) => this.handleSave(e)} id="edit-save-button">Save</button>
                        <Link to={'/profiles/edit'}>
                            <button id="edit-cancel-button">Cancel</button>
                        </Link>
                        <button onClick={(e) => this.handleDelete(e)} id="edit-delete-button">Delete Profile</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default EditProfileForm;