import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './index.scss';
import { removeItem, clearCart, increaseQuantity, decreaseQuantity } from '../../store/reducers/cartSlice';
import emptyCartImage from "../../assets/img/emptyCart.png"

const Cart = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items);
   const { t } = useTranslation();

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
         {cartItems.length === 0 ? (
            <div className="cart__empty">
               <p>{t('emptyCart')}</p>
               <img src={emptyCartImage} alt={t('emptyCartAlt')} />
            </div>
         ) : (
            <div className="cart__items">
               {cartItems.map((item) => (
                  <div key={item.id} className="cart__item">
                     <img src={item.src} alt={item.title} />
                     <div className="cart__item-details">
                        <p>{item.info}</p>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                     </div>
                     <div className="cart__item-quantity">
                        <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                     </div>
                     <button
                        className="cart__item-remove"
                        onClick={() => handleRemoveItem(item.id)}
                     >
                        {t('removeItem')}
                     </button>
                  </div>
               ))}
            </div>
         )}
         {cartItems.length > 0 && (
            <button className="cart__clear" onClick={handleClearCart}>{t('clearCart')}</button>
         )}
      </section>
   );
};

export default Cart;
