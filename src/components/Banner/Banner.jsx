import React from 'react';


import bannerImage from '../../assets/banner.jpg'
import { Helmet } from 'react-helmet';

const Banner = () => {
  return (
    
    <div className='-mt-16 '>
      <Helmet>
                <title>Home | InFinity</title>
                <meta name="description" content="Welcome to the Home page of My App." />
            </Helmet>
      <div className='bg-[#9538E2] pb-60 pt-20 rounded-2xl'>
        <h1 className='text-6xl font-semibold	 text-white lg:w-[80%] mx-auto'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='mt-10 text-white  text-center mx-[20%]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button class="btn text-[#9538E2] text-lg font-bold rounded-full mt-7 ">Shop Now</button>
      </div>
      <div  className='-mt-[15%] '>
        <div className='flex flex-col  mx-[15%]  border-2 border-white p-3 rounded-xl backdrop-blur-sm bg-white/30'>
        <img src={bannerImage} alt="" className='h-96   items-center rounded-xl' />
        </div>
      </div>
     
    </div>
  );
};

export default Banner;