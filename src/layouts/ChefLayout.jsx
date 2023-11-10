import React from 'react';
import { Link } from 'react-router-dom';
import './ChefLayout.css'
import { FaEye, FaThumbsUp } from 'react-icons/fa';

const ChefLayout = ({ dat }) => {
    const { id, name, image, experience, recipes, likes } = dat
    return (
        <div className='single-card'>
            <img style={{ width: '100%' }} src={image}></img>
            <h5 className='mt-3'>{name}</h5>
            <p>experience: {experience}</p>
            <p style={{color: "red", fontSize: "20px"}} >{recipes} Recipes</p>
            <div>
                <div className='d-flex justify-content-between'>
                <p style={{color: "blue"}}> <FaThumbsUp></FaThumbsUp>  {likes} Likes</p>
                <button> <Link to={`/dat/${id}`} className='text-decoration-none'>
                    View recipe <FaEye className='ms-1'></FaEye>
                </Link>
                </button>
                </div>
            </div>

        </div>
    );
};

export default ChefLayout;

