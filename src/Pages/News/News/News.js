import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = ({ news }) => {
    const specificNews = useLoaderData();
    console.log(specificNews);
    return (
        <Card>
            <Card.Img variant="top" src={specificNews.image_url} />
            <Card.Body>
                <Card.Title>{specificNews.title}</Card.Title>
                <Card.Text>
                    {specificNews.details}
                </Card.Text>
                <Link to={`/category/${specificNews.category_id}`}>
                    <Button variant="primary">See all related news</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;