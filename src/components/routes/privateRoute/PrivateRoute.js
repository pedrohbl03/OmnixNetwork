import React from 'react';
import { Route, Redirect } from 'react-router';
import { useLocale } from '../../../providers/auth';




const PrivateRouter = ({component: Component, ...rest}) => {

    const { userLocation } = useLocale ();
    return (
    <Route {...rest} render={props => 
        userLocation.auth ? (
            <Component {... props}/>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )
    }/>
    )
}   

export default PrivateRouter;
