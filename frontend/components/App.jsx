import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import Splash from './splash';
import BrowseContainer from './browse/browse_container';
import MovieShowContainer from './movie/movie_show_container';
import NavBar from './nav_bar';

const App = () => (
    <HashRouter>
        <div>
            <NavBar />
            <Switch>
                <ProtectedRoute path="/browse/:movieId" component={MovieShowComntainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/browse" component={BrowseContainer} />
                <AuthRoute exact path="/" component={Splash} />
            </Switch>
        </div>
    </HashRouter>
);

export default App;