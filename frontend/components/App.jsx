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
import NavBarContainer from './nav_bar_container';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.active_search) {
            return (
                <div>
                    <NavBarContainer />
                    <SearchDisplayContainer />
                </div>
            )
        } else {
            return (
                <div>
                    {/* <Switch> */}
                        {/* <div> */}
                            <NavBarContainer />
                            <Switch>
                                <ProtectedRoute path="/play/:movieId" component={MovieShowContainer} />
                                <ProtectedRoute path='/browse/my-list/:listId' component={ListContainer} />
                                <AuthRoute exact path="/login" component={LoginFormContainer} />
                                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                                <ProtectedRoute exact path="/browse" component={BrowseContainer} />
                                <AuthRoute exact path="/" component={Splash} />
                            </Switch>
                        {/* </div>
                    </Switch> */}
                </div>
            )
        }
    }
};

export default App;