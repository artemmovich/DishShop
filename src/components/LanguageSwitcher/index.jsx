import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';
const LanguageSwitcher = () => {
   const { i18n } = useTranslation();

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   };

   return (
      <div className="header__lang-switcher">
         <span onClick={() => changeLanguage('ua')} className={`header__lang ${i18n.language === 'ua' ? 'header__lang--active' : ''}`}>UA</span>
         <span onClick={() => changeLanguage('en')} className={`header__lang ${i18n.language === 'en' ? 'header__lang--active' : ''}`}>EN</span>
      </div>
   );
};

export default LanguageSwitcher;
