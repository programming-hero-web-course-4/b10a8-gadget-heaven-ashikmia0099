import React from 'react';
import { Helmet } from 'react-helmet';

const PreOrder = () => {
    return (
        <div>
            <Helmet>
                <title>Pre Order | InFinity</title>
                <meta name="description" content="Welcome to the Home page of My App." />
            </Helmet>
            <div>
                <h1 className='text-3xl font-bold pt-10'>Looking For Something Different ??</h1>
                <p className='text-xl font-semibold pt-5'>Put Your Information in The Box...</p>
            </div>
            <div className='md:mx-[30%] mt-10 text-left mb-10'>
                <span className="label-text text-xl font-semibold "> Product Information</span>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="text" className="grow" placeholder="Enter Product Name/URL" />
                </label>
                <span className="label-text text-left text-xl font-semibold "> Select Image</span>
                <label className="my-2">
                    <input type="file" className="file-input file-input-bordered w-full " />
                </label>
                <span className="label-text text-left  text-xl font-semibold"> Email</span>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <span className="label-text text-left  text-xl font-semibold"> Phone</span>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="text" className="grow" placeholder="Phone" />

                </label>
                <span className="label-text text-left  text-xl font-semibold"> Address</span>
                <label className="form-control my-2">
                   
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                   
                </label>
                <button class="btn btn-neutral text-xl font-semibold px-16 rounded-full">Submit</button>
            </div>

            
           
        </div>
    );
};

export default PreOrder;