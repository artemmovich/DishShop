import React from 'react';
import "./index.scss";
import cartItem from "../../assets/img/cartItem.svg";
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/cartSlice';
import { toast } from 'react-toastify';

export const ShopItem = ({ id, src, title, price, info }) => {
   const dispatch = useDispatch();

   const handleAddToCart = (e) => {
      e.preventDefault(); 
      dispatch(addItem({ id, src, title, price, info }));
      toast.success('Товар додано до кошика!', {
         
         autoClose: 1500,
      });
   };

   return (
      <div className="shop-item">
         <img src={src} alt={title} />
         <div className="shop-item__description">
            <div className="shop-item__text">
               <p className="shop-item__info">{info}</p>
               <p className="shop-item__title">{title}</p>
            </div>
            <div className="shop-item__about">
               <p className="shop-item__price">{price}</p>
               <button onClick={handleAddToCart} className="shop-item__link">
                  <img className="shop-item__cart" src={cartItem} alt="Add to Cart" />
               </button>
            </div>
         </div>
      </div>
   );
};
