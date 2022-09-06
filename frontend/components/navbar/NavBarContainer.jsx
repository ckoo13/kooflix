import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { logout } from "../../actions/session_actions";
import { getCurrentProfile, getProfiles } from "../../actions/profile_actions";
import { getVideos } from '../../actions/video_actions'

const mapStateToProps = ({session, entities: {users, profiles, videos}}) => {
    return {
        currentUser: users[session.id],
        currentProfile: session.currentProfile,
        profiles: Object.values(profiles),
        videos: Object.values(videos)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        getCurrentProfile: profileId => dispatch(getCurrentProfile(profileId)),
        getProfiles: currentUser => dispatch(getProfiles(currentUser)),
        getVideos: () => dispatch(getVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)