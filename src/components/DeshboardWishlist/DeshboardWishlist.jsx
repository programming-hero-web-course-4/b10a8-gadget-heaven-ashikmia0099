import React, { useContext } from 'react';
import { BsSortNumericUp } from "react-icons/bs";
import cardimage from '../../assets/banner.jpg'
import { IoCloseCircleOutline } from "react-icons/io5";
import { dataContext } from '../Provider/DataProvider';
import { Helmet } from 'react-helmet';

const DeshboardWishlist = () => {


    const { wishList } = useContext(dataContext);

    console.log(wishList.length)


    return (
        <div className='py-10 md:px-[7%] bg-[#F7F7F7]'>
            <Helmet>
                <title>Wishlist | InFinity</title>
                <meta name="description" content="Welcome to the Home page of My App." />
            </Helmet>
            <div className='flex lg:justify-start'>
                <h1 className='text-2xl font-bold'>WishList</h1>
            </div>
            {
                wishList.length === 0 ? (
                    <p className='text-4xl font-bold my-10'>Your Wish List is Empty</p>
                ) :

                    (

                        wishList.map((product, index) => (
                            <div key={index} >


                                <div className=' bg-white mt-5 py-6 px-10 rounded-2xl'>
                                    <div className='md:flex gap-10'>
                                        <div>
                                            <img src={product.image} alt="" className='h-32 w-52 rounded-2xl' />
                                        </div>
                                        <div className='text-left'>
                                            <h1 className='text-2xl font-semibold pt-1'>{product.title}</h1>
                                            <p className=' text-[#09080F99] font-medium pt-2'>{product.description}</p>
                                            <h5 className='text-xl font-bold pt-3'>Price: $ {product.price}</h5>
                                        </div>
                                        <div>
                                            <a href=""><IoCloseCircleOutline className='text-3xl text-red-800' /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    )
            }

        </div>
    );
};

export default DeshboardWishlist;





