import React, { useState } from 'react';
import { Alert, Container, Button, Spinner } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.cofirmPassword) {
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container style={{ height: '100vh' }}>
            <h2 color="#1e1e1e" sx={{ pt: 8 }} variant="h3" gutterBottom component="div">
                Register
            </h2>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <input
                    style={{ width: '25%', m: 1, color: 'white' }}

                    id="standard-basic"
                    placeholder="Your Name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <input
                    style={{ width: '25%', m: 1, color: 'white' }}

                    id="standard-basic"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <input
                    style={{ width: '25%', m: 1 }}

                    id="standard-basic"
                    placeholder="Your Password"
                    name="password"
                    onBlur={handleOnBlur}
                    type="password"
                    variant="standard" />
                <br />
                <input
                    style={{ width: '25%', m: 1 }}

                    id="standard-basic"
                    placeholder="ReType Your Password"
                    name="cofirmPassword"
                    onBlur={handleOnBlur}
                    type="password"
                    variant="standard" />
                <br />

                <Button style={{ backgroundColor: "#3D9DA0", fontSize: "18px", marginTop: "35px", width: '25%' }} type="submit" variant="contained">Register</Button>
                <br /><br />
                <NavLink style={{ textDecoration: "none" }} to="/login">
                    <Button style={{ backgroundColor: "#3D9DA0", color: "white", fontSize: "18px", width: '25%' }} type="text">Already Registered? Please Login</Button>
                </NavLink>
            </form>}
            {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {user?.email && <Alert severity="success">User created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Container>
    );
};

export default Register;