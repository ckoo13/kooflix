import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)