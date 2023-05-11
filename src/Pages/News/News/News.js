import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = ({news}) => {
    const specificNews = useLoaderData();
    return (
        <div>
            <h3>This is specific news details.</h3>
        </div>
    );
};

export default News;