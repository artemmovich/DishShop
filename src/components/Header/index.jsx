
import { NavLink } from "react-router-dom";
import './index.scss';
import HeaderLogo from "../../assets/img/Header__Logo.png"
import Cart from "../../assets/img/cart.svg"
import Search from "../../assets/img/search.svg"
export const Header = () => {
   return (
      <div className="container">
         <header className="header">
            <div className="header__top-part">
               <div className="header__lang-switcher">
                  <a href="#" className="header__lang header__lang--active">UA</a>
                  <a href="#" className="header__lang">EN</a>

               </div>
               <div className="header__logo">
                  <a href="#" className="header__logo-link"><img src={HeaderLogo} alt="Logo" className="header__logo-img" /></a>
               </div>

               <div className="header__icons">
                  <div className="header__icon">
                     <a href=""><img src={Search} alt="Search" className="header__icon-img" /></a>
                  </div>
                  <div className="header__icon header__icon--with-badge">
                     <NavLink to="/Cart">
                        <img src={Cart} alt="Cart" className="header__icon-img" />
                     </NavLink>
                     <div className="header__badge"></div>
                  </div>
               </div>
            </div>
            <nav >
               <ul className="header__nav">
                  <li className="header__nav-link">
                     <NavLink to="/Головна">Головна </NavLink>
                  </li>
                  <li className="header__nav-link">Про нас</li>

                  <li className="header__nav-link">
                     <NavLink to="/Магазин">Магазин</NavLink>
                  </li>
                  <li className="header__nav-link" >
                     Доставка і оплата
                  </li>
                  <li className="header__nav-link">
                     Контакти
                  </li>
               </ul>
            </nav>
         </header>
      </div>

   )

}
