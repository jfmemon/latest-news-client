import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();


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
            form.reset();
            navigate('/');
        })
        .catch(error => console.error(error))
    }

    return (
        <Form onSubmit={handleLogin}>
            <h3>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>

            <Form.Text className="text-danger">
                {/* We'll never share your email with anyone else. */}
            </Form.Text>
        </Form>
    );
};

export default Login;