import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                if(user.emailVerified) {
                    navigate(from, {replace: true});
                }
                else{
                    toast.error("Your email is not verified. Please verify your email address.")
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <Form onSubmit={handleLogin}>
            <h3>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" aria-required />
            </Form.Group>
            <div className='mb-2'>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </div>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;