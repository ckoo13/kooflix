import React from "react";
import { Link } from 'react-router-dom';

class AddProfile extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            user_id: this.props.userId,
            avatar: 'default'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProfile(this.state)
            .then(() => this.props.history.push('/profiles'))
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div className="edit-profile-form-whole-container">
                <div className="edit-form-header">
                    <img src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/logo.png" alt="" />
                </div>
                <div className="edit-profile-main-container">
                    <div className="edit-profile-description">
                        <h1>{this.props.formType}</h1>
                        <h2>Add a profile for another person watching Kooflix.</h2>
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
                        <button onClick={(e) => this.handleSubmit(e)} id="edit-save-button">Save</button>
                        <Link to={'/profiles'}>
                            <button id="edit-cancel-button">Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default AddProfile;