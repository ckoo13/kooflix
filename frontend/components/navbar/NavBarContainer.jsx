import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { logout } from "../../actions/session_actions";
import { getCurrentProfile, getProfiles } from "../../actions/profile_actions";

const mapStateToProps = ({session, entities: {users, profiles}}) => {
    return {
        currentUser: users[session.id],
        currentProfile: session.currentProfile,
        profiles: Object.values(profiles)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        getCurrentProfile: profileId => dispatch(getCurrentProfile(profileId)),
        getProfiles: currentUser => dispatch(getProfiles(currentUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)