import React, { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6"; 
import { useLoaderData, useParams } from 'react-router-dom';
import { dataContext } from '../Provider/DataProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const ProductDetails = () => {


   
    // this is add product context api 
    const {AddToCart,wishList} = useContext(dataContext)
    
    const {AddToWisthlist} = useContext(dataContext);
    
    const {id} = useParams();
    const data = useLoaderData();
    const productid = parseInt(id);
    const product = data.find(product => product.id === productid );

    const {image,title, price, description, specifications,rating} = product;


    // cheack this product is in list exist

    const CheckWishListItems = wishList.some(item => item.id === product.id)

    return (
        <div>
            <Helmet>
                <title>Product Details | InFinity</title>
                <meta name="description" content="Welcome to the Home page of My App." />
            </Helmet>
            <div className='bg-[#ECECEC]'>
                <div className='bg-[#9538E2] pb-60'>
                    <h1 className='text-4xl font-bold pt-6 text-white'>Product Details</h1>
                    <p className='mt-2 mx-[15%] text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className=' pb-32'>
                    <div className='md:mx-[10%] text-start '>
                        <div className="hero bg-white md:rounded-3xl p-7 md:-mt-[20%]">
                            <div className="hero-content flex-col lg:flex-row ">
                                <img
                                    src={image}
                                    className="lg:max-w-sm h-full rounded-lg shadow-2xl" />
                                <div className='md:px-14'>
                                    <h1 className="text-3xl font-bold">{title} </h1>
                                    <h5 className='text-xl font-semibold'>Price : $ {price} </h5>
                                    <button class="btn btn-outline bg-[#EAF5E6] btn-success rounded-full px-8 mt-3">In Stock</button>
                                    <p className="py-3"> {description} </p>
                                    <p>
                                        <span className='text-lg font-bold'>Specification:</span>

                                        <ol>
                                            {
                                                specifications.map(specifi => <li> {specifi} </li> )
                                            }
                                           
                                           
                                        </ol>
                                    </p>

                                    <div className='pt-2'>
                                        <p className='text-lg font-bold'>Rating ⭐ </p>

                                        <div className="rating gap-2">
                                            <div>
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                            <div>
                                                <p className=' rounded-3xl px-3 bg-[#ECECEC]'> {rating} </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div className='mt-3'>
                                            <button onClick={() => AddToCart(product)}  className='flex items-center gap-2 px-5 py-2 bg-[#8E36D7] rounded-full' > <span className='md:text-lg font-bold text-white'>Add To Card</span> <span><FaCartShopping className='text-white text-lg' /></span></button>
                                            <ToastContainer />
                                        </div>
                                        <div className='p-2 mt-2  '>
                                            <button onClick={() => AddToWisthlist(product)}>
                                                {
                                                    CheckWishListItems ? (
                                                        <FaHeart   className='text-2xl text-red-800 cursor-pointer' />
                                                    ) : (
                                                        <FaRegHeart className='text-2xl text-black cursor-pointer'></FaRegHeart>
                                                    )
                                                }
                                            </button>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;