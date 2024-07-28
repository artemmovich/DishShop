import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { removeItem, clearCart, increaseQuantity, decreaseQuantity } from '../../store/reducers/cartSlice';
import emptyCartImage from "../../assets/img/emptyCart.png"

const Cart = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items);

   const handleRemoveItem = (id) => {
      dispatch(removeItem(id));
   };

   const handleClearCart = () => {
      dispatch(clearCart());
   };

   const handleIncreaseQuantity = (id) => {
      dispatch(increaseQuantity(id));
   };

   const handleDecreaseQuantity = (id) => {
      dispatch(decreaseQuantity(id));
   };

   return (
      <section className="cart">
         <h2>Ваш кошик</h2>
         {cartItems.length === 0 ? (
            <div className="cart__empty">
               <p>Ваш кошик порожній</p>
               <img src={emptyCartImage} alt="Кошик порожній" />
            </div>
         ) : (
            <div className="cart__items">
               {cartItems.map((item, index) => (
                  <div key={item.id} className="cart__item">
                     <img src={item.src} alt={item.title} />
                     <div className="cart__item-details">
                        <p>{item.info}</p>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                        <div className="cart__item-quantity">
                           <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                           <span>{item.quantity}</span>
                           <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                        </div>
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
