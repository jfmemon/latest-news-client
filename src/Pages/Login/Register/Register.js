import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const { register } = useContext(AuthContext);

    const handleRegistrationSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <Form onSubmit={handleRegistrationSubmit}>
            <h3>Please register first...</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <div className='mb-2'>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </div>
            <Button variant="primary" type="submit">
                Register
            </Button>

        </Form>
    );
};

export default Register;