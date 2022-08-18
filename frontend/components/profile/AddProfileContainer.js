import React from 'react'
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile_actions';
import AddProfile from './AddProfile';

const mapStateToProps = state => {
    return {
        userId: state.session.id,
        formType: 'Add Profile'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createProfile: profile => dispatch(createProfile(profile))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProfile)
