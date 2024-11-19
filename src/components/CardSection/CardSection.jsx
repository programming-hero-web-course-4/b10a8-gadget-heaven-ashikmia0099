import React, { useState } from 'react';
import Card from '../Card/Card';
import Categorys from '../Category/Categorys';
import Cards from '../Cards/Cards';

const CardSection = () => {


    const [selectedCategory,setselectedCategory ] = useState('All');

    const handelCategorySelected = (category) => {
        setselectedCategory(category)
    }


    return (
        <div >
            <div>
            <h1 className='text-4xl font-bold text-center mt-5'>Explore Cutting-Edge Gadgets</h1>
            </div>
           <div  className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-4'>
           <div className='col-span-1'>
           <Categorys handelCategorySelected={handelCategorySelected}></Categorys>
           </div>
           <div  className='lg:col-span-3 md:col-span-2'> 
           <Cards selectedCategory={selectedCategory}></Cards>
           </div>
           
           </div>
           
        </div>
    );
};

export default CardSection;