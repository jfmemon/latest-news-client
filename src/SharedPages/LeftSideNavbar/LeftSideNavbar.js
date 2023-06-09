import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://latest-news-server.vercel.app/news-category')  // 1stly fetch korbo then...
        .then(response => response.json())  // je response pabo take json a convert korbo
        .then(data => setCategories(data))  // je data pabo take use korbo
    },[])

    return (
        <div>
            <h3>All category: {categories.length}</h3>
            <div>
                {
                    categories.map(category => 
                    <Link to={`/category/${category.id}`}><p>{category.name}</p></Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;