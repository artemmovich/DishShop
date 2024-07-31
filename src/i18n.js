import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "shopTitle": "Shop",
      "emptyCart": "Your cart is empty",
      "emptyCartAlt": "Empty Cart",
      "removeItem": "Remove",
      "clearCart": "Clear Cart",
      "cart": "Cart",
      "home": "Home",
      "aboutUs": "About Us",
      "shop": "Shop",
      "deliveryAndPayment": "Delivery and Payment",
      "contacts": "Contacts",
      "item1Info": "Paşabahçe Aquatic",
      "item1Title": "Shot glass set 6x60ml",
      "item2Info": "Paşabahçe Aquatic",
      "item2Title": "Wine glass set 6x200ml",
      "item3Info": "Paşabahçe Aquatic",
      "item3Title": "Beer mug set 2x500ml",
      // Додайте інші переклади товарів
    }
  },
  ua: {
    translation: {
      "shopTitle": "Магазин",
      "emptyCart": "Ваш кошик порожній",
      "emptyCartAlt": "Кошик порожній",
      "removeItem": "Видалити",
      "clearCart": "Очистити кошик",
      "cart": "Кошик",
      "home": "Головна",
      "aboutUs": "Про нас",
      "shop": "Магазин",
      "deliveryAndPayment": "Доставка і оплата",
      "contacts": "Контакти",
      "item1Info": "Paşabahçe Aquatic",
      "item1Title": "Стопка для водки набір 6Х60мл",
      "item2Info": "Paşabahçe Aquatic",
      "item2Title": "Бокал для вина набір 6Х200мл",
      "item3Info": "Paşabahçe Aquatic",
      "item3Title": "Кружка для пива набір 2Х500мл",
      // Додайте інші переклади товарів
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ua', // початкова мова
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
