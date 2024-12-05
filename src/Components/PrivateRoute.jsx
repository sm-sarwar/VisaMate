import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <div className="text-center">
            <p className="loading loading-ring loading-lg"></p>
        </div>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to="/auth/login">
            
        </Navigate>
    );
};

export default PrivateRoute;