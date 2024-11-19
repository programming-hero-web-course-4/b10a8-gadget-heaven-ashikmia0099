import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import CardSection from '../CardSection/CardSection';
import { dataContext } from '../Provider/DataProvider';

const Home = () => {

   
    return (
        <div >
            <Banner></Banner>
            
            <CardSection></CardSection>
            
        </div>
    );
};

export default Home;