import React from "react";
import { connect } from "react-redux";
import { getProfiles, getProfile, getCurrentProfile} from "../../actions/profile_actions";
import ProfileIndex from "./ProfileIndex";

const mapStateToProps = state => {
    return {
        profiles: Object.values(state.entities.profiles),
        currentUser: state.session.id
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProfiles: userId => dispatch(getProfiles(userId)),
        getProfile: profileId => dispatch(getProfile(profileId)),
        getCurrentProfile: profileId => dispatch(getCurrentProfile(profileId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex)