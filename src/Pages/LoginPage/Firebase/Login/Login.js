import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Login.css';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login">
            <div>
                <h1>Let's Login First</h1>
                {/* <form onSubmit="">
                    <input type="email" name="" id="" />
                    <br />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form> */}

                <Button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</Button>
            </div>
        </div>
    );
};

export default Login;