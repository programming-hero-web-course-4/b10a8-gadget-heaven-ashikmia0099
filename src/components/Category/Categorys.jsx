import React from 'react';

const Categorys = ({handelCategorySelected}) => {
    
    const categories = ['All','Mobile', 'Laptop', 'Accessories','Smart watch'];
    
    return (
        <div>
            <div className=' p-14'>
                <div className='border border-[#acacaf] rounded-2xl pt-5 pb-5'>
                    <ul>
                        
                       {
                        categories.map((category, index) =>(
                            <li className='pt-3' key={index}><button className="btn text-[#66666A] rounded-full px-10 " onClick={() => handelCategorySelected(category)}> {category} </button></li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categorys;