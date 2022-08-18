import { fetchProfiles, fetchProfile, postProfile, patchProfile, deleteProfile } from "../util/profile_util";

// export constants
export const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const OBLITERATE_PROFILE = 'OBLITERATE_PROFILE';


// regular action creators
export const receiveProfiles = profiles => {
    return {
        type: RECEIVE_ALL_PROFILES,
        profiles
    }
};

export const receiveProfile = profile => {
    return {
        type: RECEIVE_PROFILE,
        profile
    }
};

export const obliterateProfile = profileId => {
    return {
        type: OBLITERATE_PROFILE,
        profileId
    }
};


// thunk action creators
export const getProfiles = userId => dispatch => fetchProfiles(userId)
    .then(profiles => dispatch(receiveProfiles(profiles)));

export const getProfile = profileId => dispatch => fetchProfile(profileId)
    .then(profile => dispatch(receiveProfile(profile)));

export const createProfile = profile => dispatch => postProfile(profile)
    .then(profile => dispatch(receiveProfile(profile)));

export const updateProfile = profile => dispatch => patchProfile(profile)
    .then(profile => dispatch(receiveProfile(profile)))

export const removeProfile = profileId => dispatch => deleteProfile(profileId)
    .then(() => dispatch(obliterateProfile(profileId)))