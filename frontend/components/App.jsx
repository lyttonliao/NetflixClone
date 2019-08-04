import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import Splash from './splash';
import BrowseContainer from './browse/browse_container';
import MovieShowContainer from './movie/movie_show_container';
import ListContainer from './list/list_container';
import SearchDisplayContainer from './search/search_display_container'
// import NavBar from './nav_bar'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.movie_titles.length != 0) {
            return (
                <div>
                    <Route to="/search" component={SearchDisplayContainer} />
                </div>
            )
        } else {
            return (
                <div>
                    <Switch>
                        <ProtectedRoute path='/browse/my-list/:listId' component={ListContainer} />
                        <ProtectedRoute path="/play/:movieId" component={MovieShowContainer} />
                        <AuthRoute exact path="/login" component={LoginFormContainer} />
                        <AuthRoute exact path="/signup" component={SignupFormContainer} />
                        <ProtectedRoute exact path="/browse" component={BrowseContainer} />
                        <AuthRoute exact path="/" component={Splash} />
                    </Switch>
                </div>
            )
        }
    }
};

export default App;