import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../../pages/home/index';
import OffersPage from '../../pages/offers/index';
import PrivateRoute from '../routes/privateRoute/PrivateRoute';

const Routes = () => (
    <Router>
        <div className="App">
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <PrivateRoute path="/offers" exact component={OffersPage}/>
        </Switch>
        </div>
    </Router>
);

export default Routes;