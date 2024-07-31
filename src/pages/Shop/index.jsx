import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShopItem } from '../../components/ShopItem';
import ShopPicture1 from "../../assets/img/ShopPic1.png";
import ShopPicture2 from "../../assets/img/ShopPic2.png";
import ShopPicture3 from "../../assets/img/ShopPic3.png";
import './index.scss';

export const Shop = () => {
   const { t } = useTranslation();

   const items = [
      { id: 1, src: ShopPicture1, info: t('item1Info'), title: t('item1Title'), price: "65,00 грн" },
      { id: 2, src: ShopPicture2, info: t('item2Info'), title: t('item2Title'), price: "120,00 грн" },
      { id: 3, src: ShopPicture3, info: t('item3Info'), title: t('item3Title'), price: "180,00 грн" },
      { id: 4, src: ShopPicture1, info: t('item1Info'), title: t('item1Title'), price: "65,00 грн" },
      { id: 5, src: ShopPicture2, info: t('item2Info'), title: t('item2Title'), price: "120,00 грн" },
      { id: 6, src: ShopPicture3, info: t('item3Info'), title: t('item3Title'), price: "180,00 грн" },
      { id: 7, src: ShopPicture1, info: t('item1Info'), title: t('item1Title'), price: "65,00 грн" },
      { id: 8, src: ShopPicture2, info: t('item2Info'), title: t('item2Title'), price: "120,00 грн" },
      { id: 9, src: ShopPicture3, info: t('item3Info'), title: t('item3Title'), price: "180,00 грн" },
   ];

   return (
      <section className="shop">
         
         <div className="shop__wrapper">
            {items.map(item => (
               <ShopItem
                  key={item.id}
                  id={item.id}
                  src={item.src}
                  info={item.info}
                  title={item.title}
                  price={item.price}
               />
            ))}
         </div>
      </section>
   );
};
