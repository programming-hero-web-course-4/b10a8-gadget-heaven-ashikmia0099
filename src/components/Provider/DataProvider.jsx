import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const dataContext = createContext([])



const DataProvider = ({children}) => {

    // cart data state
    const [cart, setCart] = useState([]);

    // wishlist data state

    const [wishList, setWishList] = useState([]);

    const AddToCart = (product) => {

       setCart((prevCart) => [...prevCart, product]);
       toast.success('Product successfully added to cart.');

    }

    // handel total price in cart data

    const handeltotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    }

    // wishlist data add

    const AddToWisthlist = (choice) => {

        const CheckWishListItems = wishList.some(item => item.id === choice.id)


        if(CheckWishListItems) {
            toast.error('This product is already in your wishlist')
            return;
        }


        setWishList((prevWishList) => [...prevWishList, choice]);
        toast.success('Product successfully added to WishList.');

    } 


    const HandelCartPurches = () =>{
        setCart([]);
        
    }


    const SortByPriceDesending = () => {
        const cartSorted = [...cart].sort((a,b) => b.price - a.price);
        setCart(cartSorted);

    };




    return <dataContext.Provider value={{cart, AddToCart,handeltotalPrice,AddToWisthlist, wishList,HandelCartPurches,SortByPriceDesending}}> {children} </dataContext.Provider>
};

export default DataProvider;