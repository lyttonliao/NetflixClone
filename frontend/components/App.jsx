import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import Splash from './splash';
import Greeting from './greeting/greeting';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <header>

        </header>

        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/browse" component={GreetingContainer} />
            <Route path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;