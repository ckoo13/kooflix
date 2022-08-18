import React from "react";
import { connect } from "react-redux";
import { getProfiles, getProfile } from "../../actions/profile_actions";
import EditProfilesIndex from "./EditProfilesIndex";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
    return {
        profiles: Object.values(state.entities.profiles),
        currentUser: state.session.id
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProfiles: userId => dispatch(getProfiles(userId)),
        getProfile: profileId => dispatch(getProfile(profileId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfilesIndex))