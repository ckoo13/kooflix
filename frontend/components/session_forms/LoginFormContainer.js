import React from "react";
import { connect } from "react-redux";
import { login, deleteErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./SessionForm";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Log In',
        navLink: <Link id="session-redirect-link" to={'/signup'}>Sign up now.</Link>
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(login(user)),
        deleteErrors: () => dispatch(deleteErrors())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)