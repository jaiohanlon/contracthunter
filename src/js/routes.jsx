import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LoggedOut from 'views/logged-out';
import LoggedIn from 'views/logged-in';
import Login from 'views/login';
import Register from 'views/register';
import AccountRecovery from 'views/account-recovery';
import Dashboard from 'views/app/dashboard';

const Routes = () => (
    <div>
        <Router>
            <div>
                <Switch>
                    <Route path="/app">
                        <LoggedIn>
                            <Route path="/app/dashboard" component={Dashboard} />
                            <Route render={() => <Redirect to={{ pathname: '/app/dashboard' }} />} />
                        </LoggedIn>
                    </Route>
                    <Route>
                        <LoggedOut>
                            <Switch>
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                <Route path="/account-recovery" component={AccountRecovery} />
                                <Route render={() => <Redirect to={{ pathname: '/login' }} />} />
                            </Switch>
                        </LoggedOut>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
);

export default Routes;
