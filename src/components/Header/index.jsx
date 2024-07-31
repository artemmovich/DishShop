import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // імпорт хука useTranslation
import LanguageSwitcher from '../LanguageSwitcher';
import { useSelector } from 'react-redux';
import './index.scss';
import HeaderLogo from "../../assets/img/HeaderLogo.png";
import Cart from "../../assets/img/cart.svg";
import Search from "../../assets/img/search.svg";

export const Header = () => {
   const { t } = useTranslation(); // використання хука useTranslation
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const closeNav = () => {
      setMenuOpen(false);
   };
   const cartItems = useSelector(state => state.cart.items);
   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

   return (
      <div className="container">
         <header className="header">
            <div className="header__top-part">
               <div onClick={toggleMenu} className="header__burger">
                  <span className="header__burger-line"></span>
                  <span className="header__burger-line"></span>
                  <span className="header__burger-line"></span>
               </div>
               <LanguageSwitcher />
              
                  <a href="#" className="header__logo-link">
                     <img src={HeaderLogo} alt="Logo" className="header__logo-img" />
                  </a>
               
               <div className="header__icons">

                  <a href="#"><img src={Search} alt="Search" className="header__icon-img" /></a>

                  <div className="header__icon header__icon--with-badge">
                     {totalItems > 0 && <div className="header__badge">{totalItems}</div>}
                     <NavLink to="/cart">
                        <img onClick={closeNav} src={Cart} alt={t('cart')} className="header__icon-img" />
                     </NavLink>
                  </div>
               </div>
            </div>
            <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
               <ul className="header__nav-list">
                  <li onClick={closeNav} className="header__nav-link">
                     <NavLink to="/">{t('home')}</NavLink>
                  </li>
                  <li onClick={closeNav} className="header__nav-link">
                     <NavLink >{t('aboutUs')}</NavLink>
                  </li>
                  <li onClick={closeNav} className="header__nav-link">
                     <NavLink to="/shop">{t('shop')}</NavLink>
                  </li>
                  <li onClick={closeNav} className="header__nav-link">
                     <NavLink >{t('deliveryAndPayment')}</NavLink>
                  </li>
                  <li onClick={closeNav} className="header__nav-link">
                     <NavLink >{t('contacts')}</NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </div>
   );
};
