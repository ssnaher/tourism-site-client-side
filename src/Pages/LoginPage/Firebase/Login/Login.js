import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Login.css';



const Login = () => {
    const { signInUsingGoogle, signInUsingFacebook } = useAuth();
    return (
        <div className="login">
            <div>
                <h1>Let's Login First</h1>
                <Button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</Button><br /> <br />
                <Button onClick={signInUsingFacebook} className="btn btn-warning">Facebook Sign In</Button><br /> <br />
            </div>
        </div>
    );
};

export default Login;