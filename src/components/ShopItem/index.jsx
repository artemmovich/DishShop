import React, { useState, useEffect } from 'react';
import "./index.scss";
import { addItem, increaseQuantity, decreaseQuantity, removeItem } from '../../store/reducers/cartSlice';
import cartItem from "../../assets/img/cartItem.svg";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const ShopItem = ({ id, src, title, price, info }) => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items);
   const itemInCart = cartItems.find(item => item.id === id);
   const [quantity, setQuantity] = useState(itemInCart ? itemInCart.quantity : 0);
   useEffect(() => {
      if (itemInCart) {
         setQuantity(itemInCart.quantity);
      } else {
         setQuantity(0);
      }
   }, [itemInCart]);

   const handleAddToCart = (e) => {
      e.preventDefault();
      dispatch(addItem({ id, src, title, price, info }));
      toast.success('Товар додано до кошика!', {
         autoClose: 1500,
      });
   };

   const handleIncreaseQuantity = () => {
      dispatch(increaseQuantity(id));
   };

   const handleDecreaseQuantity = () => {
      if (quantity === 1) {
         dispatch(removeItem(id));
      } else {
         dispatch(decreaseQuantity(id));
      }
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
               {quantity > 0 ? (
                  <div className="shop-item__quantity-controls">
                     <button onClick={handleDecreaseQuantity} >-</button>
                     <span className="shop-item__quantity">{quantity}</span>
                     <button onClick={handleIncreaseQuantity}>+</button>
                  </div>
               ) : (
                  <button onClick={handleAddToCart} className="shop-item__link" href="#">
                     <img className="shop-item__cart" src={cartItem} alt="Add to Cart" />
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};
