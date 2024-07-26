// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { removeItem, clearCart } from '../../store/reducers/cartSlice';
import emptyCartImage from "../../assets/img/emptyCart.png"

const Cart = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items);
   const items = useSelector(state => state.cart.items);
   const handleRemoveItem = (id) => {
      dispatch(removeItem(id));
   };

   const handleClearCart = () => {
      dispatch(clearCart());
   };

   return (


      <section className="cart">
         <h2>Ваш кошик</h2>
         {cartItems.length === 0 ? (
            <div className="cart__empty">
               <p>Ваш кошик порожній</p>
               <img height={'437px'} width={'436px'} src={emptyCartImage} alt="Кошик порожній" />
            </div>
         ) : (
            <div className="cart__items">
               {items.map((item, index) => (
                  <div key={item.id} className="cart__item">
                     <img src={item.src} alt={item.title} />
                     <div className="cart__item-details">
                        <p>{item.info}</p>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                     </div>
                     <button
                        className="cart__item-remove"
                        onClick={() => handleRemoveItem(item.id)}
                     >
                        Видалити
                     </button>
                  </div>
               ))}
            </div>
         )}
          {cartItems.length > 0 && (
        <button className="cart__clear" onClick={handleClearCart}>Очистити кошик</button>
      )}
      </section>
   );
};

export default Cart;
