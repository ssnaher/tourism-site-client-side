import React, { useState } from 'react';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Login.css';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    return (

        <Container style={{ height: "100vh" }}>
            <h2 color="#1e1e1e">
                Login
            </h2>
            <form onSubmit={handleLoginSubmit}>
                <input
                    style={{ width: '30%', color: 'white' }}
                    id="standard-basic"
                    placeholder="Your Email"
                    name="email"
                    onChange={handleOnChange}
                />
                <br />
                <br />
                <input
                    style={{ width: '30%' }}
                    id="standard-basic"
                    placeholder="Your Password"
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                />
                <br />

                <Button style={{ color: 'white', borderColor: 'none', backgroundColor: "#3D9DA0", fontSize: "18px", marginTop: "35px", width: '30%' }} type="submit" className="btn btn-warning">Login</Button>
                <br />
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/register">
                    <Button style={{ color: "white", fontSize: "18px" }} className="btn btn-secondary">New Here? Please Register</Button>
                </NavLink><br />
                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {user?.email && <Alert style={{ marginTop: "35px", width: '30%' }} severity="success">User logged in successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}

            </form>

        </Container>

    );
};

export default Login;