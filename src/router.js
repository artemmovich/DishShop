import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Routes

} from "react-router-dom";

import { Cart } from "./pages/Cart/";
import { Shop } from "./pages/Shop";
import { Intro } from "./pages/Intro";



export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route >
      <Route path="/Головна" element={<Intro />} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Магазин" element={<Shop />} />
    </Route>

  )
);
