import React from 'react';
import { useTranslation } from 'react-i18next';
import BgImg from '../../assets/img/bgImage.jpg';
import './index.scss';
import { Link } from '../../components/Link';
export const Intro = () => {
   const { t } = useTranslation();
   return (
      <section className='intro' >

         <div className="intro__wrapper" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className='intro__text'>
               <h1 className='intro__title'>хай не б’ється</h1>
               <Link text={t('shop')} />
            </div>
         </div>

      </section>
   )
}
