import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, deleteErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm';


const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        navLink: <Link to={'/login'}>Login instead</Link>
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(signup(user)),
        deleteErrors: () => dispatch(deleteErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);