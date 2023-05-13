import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../../SharedPages/NewsCard/NewsCard';

const Category = () => {
    const newsCategory = useLoaderData();
    return (
        <div>
            <h3>This is news category: {newsCategory.length}</h3>
            {
                newsCategory.map(news => <NewsCard
                    key={news._id}
                    news={news}
                >
                </NewsCard>)
            }
        </div>
    );
};

export default Category;