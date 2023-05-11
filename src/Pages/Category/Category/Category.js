import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const newsCategory = useLoaderData();
    return (
        <div>
            <h3>This is news category: {newsCategory.length}</h3>
        </div>
    );
};

export default Category;