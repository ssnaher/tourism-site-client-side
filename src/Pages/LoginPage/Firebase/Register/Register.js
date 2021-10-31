import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';



const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Register here</h1>
            <form onSubmit="">
                <input type="email" name="" id="" />
                <br />
                <br />
                <input type="password" name="" id="" />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p>Already have an account? <Link to="/login">Create Account</Link></p>
            <br /><br />
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
        </div>
    );
};

export default Register;