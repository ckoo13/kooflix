import React from 'react';
import { Route, Redirect, Switch, Link} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_forms/LoginFormContainer';
import SignupFormContainer from './session_forms/SignupFormContainer';
import ProfileIndexContainer from './profile/ProfileIndexContainer';
import EditProfilesIndexContainer from './profile/EditProfilesIndexContainer';
import EditProfileFormContainer from './profile/EditProfileFormContainer';
import AddProfileContainer from './profile/AddProfileContainer';
import Splash from './splash/splash'
import BrowseContainer from './browse/BrowseContainer';
import VideoPlayerContainer from './video_player/VideoPlayerContainer';
import MoviesContainer from './movies/MoviesContainer';
import ShowsContainer from './shows/ShowsContainer';
import ListContainer from './list/ListContainer';

const App = () => {
    return (
        <div>
            <Switch>
                <ProtectedRoute path='/myList' exact component={ListContainer} />
                <ProtectedRoute path='/shows' exact component={ShowsContainer} />
                <ProtectedRoute path='/movies' exact component={MoviesContainer} />
                <ProtectedRoute path='/browse/:videoid' exact component={VideoPlayerContainer} />
                <ProtectedRoute path='/browse' component={BrowseContainer} />
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <ProtectedRoute path='/profiles' exact component={ProfileIndexContainer} />
                <ProtectedRoute path='/profiles/edit' exact component={EditProfilesIndexContainer} />
                <ProtectedRoute path='/profiles/:profileid/edit' exact component={EditProfileFormContainer} />
                <ProtectedRoute path='/profiles/new' exact component={AddProfileContainer} />
                <AuthRoute path ='/' exact component={Splash} />
            </Switch>
        </div>
    )
};

export default App;