import React from "react";

class EditProfileForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.profile;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // call the editAction
        // redirect to /profiles/edit
    }

    render() {
        return (
            <div>
                <div className="header">
                    <img src={logoUrl} alt="" />
                </div>
                <div className="edit-profile-main-container">
                    <div className="edit-profile-description">
                        <h1>{this.props.formType}</h1>
                        <h3>Edit a profile for another person watching Netflix</h3>
                    </div>
                    <div className="edit-profile-form">
                        <div className="profile-avatar">

                        </div>
                        <div className="edit-profile-name-input">
                            <input type="text" value={this.props.profile.name} placeholder="Name" />
                        </div>
                    </div>
                    <button></button>
                    <button></button>
                </div>
            </div>
        )
    }
};

export default EditProfileForm;