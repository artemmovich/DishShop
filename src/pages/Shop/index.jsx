
import React, { useState } from 'react';
import { ShopItem } from '../../components/ShopItem';
import ShopPicture1 from "../../assets/img/ShopPic1.png";
import ShopPicture2 from "../../assets/img/ShopPic2.png";
import ShopPicture3 from "../../assets/img/ShopPic3.png";
import './index.scss';
import { Notification } from '../../components/Notification';

export const Shop = () => {
   const [notification, setNotification] = useState('');
   const items = [
      { id: 1, src: ShopPicture1, info: "Paşabahçe Aquatic", title: "Стопка для водки набір 6Х60мл", price: "65,00 грн" },
      { id: 2, src: ShopPicture2, info: "Paşabahçe Aquatic", title: "Бокал для вина набір 6Х200мл", price: "120,00 грн" },
      { id: 3, src: ShopPicture3, info: "Paşabahçe Aquatic", title: "Кружка для пива набір 2Х500мл", price: "180,00 грн" },
      { id: 4, src: ShopPicture1, info: "Paşabahçe Aquatic", title: "Чарка для горілки набор 6Х60мл", price: "65,00 грн" },
      { id: 5, src: ShopPicture2, info: "Paşabahçe Aquatic", title: "Бокал для вина нібір 6Х200мл", price: "120,00 грн" },
      { id: 6, src: ShopPicture3, info: "Paşabahçe Aquatic", title: "Кружка для пива набір 2Х500мл", price: "180,00 грн" },
      { id: 7, src: ShopPicture1, info: "Paşabahçe Aquatic", title: "Стопка для водки набір 6Х60мл", price: "65,00 грн" },
      { id: 8, src: ShopPicture2, info: "Paşabahçe Aquatic", title: "Бокал для вина набір 6Х200мл", price: "120,00 грн" },
      { id: 9, src: ShopPicture3, info: "Paşabahçe Aquatic", title: "Кружка для пива набір 2Х500мл", price: "180,00 грн" },
   ];
   const handleNotificationClose = () => setNotification('');

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
                  onAddToCart={() => setNotification('Товар додано до кошика!')}
               />
            ))}
         </div>
         {notification && (
            <Notification
               message={notification}
               onClose={handleNotificationClose}
            />
         )}
      </section>
   );
};

