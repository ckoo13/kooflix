import React from "react";
import { connect } from "react-redux";
import { getProfile, removeProfile, updateProfile } from "../../actions/profile_actions";
import EditProfileForm from "./EditProfileForm";
import { withRouter } from "react-router-dom";

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfileForm))