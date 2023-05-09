import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const RightSideNavbar = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary">Login with google</Button>
                <Button className='mt-2' variant="outline-dark">Login with github</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNavbar;