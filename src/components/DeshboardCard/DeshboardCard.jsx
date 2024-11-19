import React, { useContext } from 'react';
import { BsSortNumericUp } from "react-icons/bs";

import { IoCloseCircleOutline } from "react-icons/io5";
import { dataContext } from '../Provider/DataProvider';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DeshboardCard = () => {

    const { cart, handeltotalPrice, HandelCartPurches, SortByPriceDesending } = useContext(dataContext);


    const handelPurchesAndModal = () => {

       
        document.getElementById('my_modal_1').showModal();
        HandelCartPurches();
        


    }


    return (
        <div className='py-10 md:px-[7%] bg-[#F7F7F7]'>
            <Helmet>
                <title>Cart | InFinity</title>
                <meta name="description" content="Welcome to the Home page of My App." />
            </Helmet>
            <div className='md:flex md:justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Cart</h1>
                </div>
                <div className='md:flex items-center  gap-8'>
                    <h1 className='text-2xl font-bold'>Total cost: ${handeltotalPrice()} </h1>
                    <button className="btn btn-outline text-lg font-semibold px-12 rounded-full my-2" onClick={() => SortByPriceDesending()}>
                        Sort by Price <span className="text-2xl font-bold"><BsSortNumericUp /></span>
                    </button>
                    <button onClick={() => handelPurchesAndModal()} class="btn btn-outline   my-2 text-lg font-semibold px-12 rounded-full">Purches</button>
                </div>
            </div>

            {
                cart.length === 0 ? (
                    <p className='text-5xl font-bold my-20'>Your cart is Empty</p>
                ) : (
                    cart.map((product, index) => (


                        <div key={index} className=' bg-white mt-5 py-6 px-10 rounded-2xl'>
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

                    ))
                )
            }

            {/* modal show */}
            
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl border-b border-gray pb-2">Payment Successfully</h3>
                    <p>Thanks for purchasing.</p>
                    
                    <div className="modal-action">
                        <form method="dialog">
                            <NavLink to='/'><button className="btn">Close</button></NavLink>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default DeshboardCard;


