import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />   // loading thakle spinner dakhabe
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>  // user na thakle login page a jabe
    }

    return children;  // onnothay children(news) a jabe
};

export default PrivateRoutes;