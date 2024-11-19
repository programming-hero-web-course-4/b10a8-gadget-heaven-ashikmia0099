import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Cards = ({ selectedCategory }) => {


    const [cards, setCard] = useState([]);


    useEffect(() => {
        fetch('/phonesData.json')
            .then(res => res.json())
            .then(data => setCard(data))


    }, []);


    const CategoryFilterData = selectedCategory === 'All' || !selectedCategory
        ? cards :
        cards.filter(card => card.category === selectedCategory);






    return (
        <div className=''>
            {
                CategoryFilterData.length > 0 ? (
                    <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4'>

                        {
                            CategoryFilterData.map(card => (<Card key={card.id} card={card}></Card>))
                        }
                    </div>
                ) : (
                    <div className="text-center text-black mt-10 items-center">

                        <h2 className="text-4xl font-bold">No Data Found</h2>
                        
                    </div>

                )
            }


        </div>
    );
};

export default Cards;