import React from "react";
import { connect } from "react-redux";
import { removeProfile, updateProfile } from "../../actions/profile_actions";
import EditProfileForm from "./EditProfileForm";

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.entities.profiles[ownProps.match.params.profileid],
        formType: 'Edit Profile'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: profileId => dispatch(getProfile(profileId)),
        updateProfile: profile => dispatch(updateProfile(profile)),
        removeProfile: profileId => dispatch(removeProfile(profileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)