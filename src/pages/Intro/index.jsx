import React from 'react'
import BgImg from '../../assets/img/bg-image.jpg'
import './index.scss';
import { Button } from '../../components/Button';
export const Intro = () => {
   return (
      <section className='intro' >
   
         <div className="intro__wrapper" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className='intro__text'>
               <h1 className='intro__title'>хай не б’ється</h1>
               <Button label={'магазин'} />
            </div>
         </div>
         
      </section>
   )
}
