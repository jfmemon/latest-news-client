import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { _id, total_view, title, image_url, details, author, rating } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ width: '40px' }}
                        className='me-2'
                    >
                    </Image>
                    <div>
                        <p><small>{author.name}</small></p>
                        <p><small>{author.published_date}</small></p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div>
                    <Card.Img variant="top" src={image_url} />
                </div>
                <Card.Text>
                    {details.length > 200 ?
                        <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>See more</Link> </p>  // news er id onujayi specific news er 0-250 word dekhabe.
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>
                        {rating?.number}
                    </span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>
                        {total_view}
                    </span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;