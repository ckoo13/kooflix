// get user profiles
export const fetchProfiles = userId => {
    return $.ajax({
        url: `/api/users/${userId}/profiles`,
        method: 'GET'
    })
};

// get a specific profile
export const fetchProfile = profileId => {
    return $.ajax({
        url: `/api/profiles/${profileId}`,
        method: 'GET'
    })
}

// create a profile
export const postProfile = profile => {
    return $.ajax({
        url: `/api/users/${profile.user_id}/profiles`,
        method: 'POST',
        data: { profile }
    })
};

// update a profile
export const patchProfile = profile => {
    return $.ajax({
        url: `/api/profiles/${profile.id}`,
        method: 'PATCH',
        data: { profile }
    })
};

// delete a profile
export const deleteProfile = profileId => {
    return $.ajax({
        url: `/api/profiles/${profileId}`,
        method: 'DELETE'
    })
};