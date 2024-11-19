import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {

   

    const { id, title, price, image } = card;

    return (
        <Link to={`products/${id}`}>
        <div className='mt-10 mb-10'>
            <div className="card bg-base-100  shadow-xl mt-2 text-start">
                <figure>
                    <img
                        src={image}
                        alt={title} className=' rounded-2xl h-[150px]' />
                </figure>
                <div className="card-body -mx-7">
                    <h2 className="card-title"> {title}</h2>
                    <h5 className='text-[#66666A] text-lg font-semibold mt-4'>Price: $ {price}</h5>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline rounded-full text-[#9538E2] text-lg mt-7">View Details</button>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};


export default Card;

