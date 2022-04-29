import { Admin } from "./pages/Admin";
import { Basket } from "./pages/Basket";
import { Shop } from "./pages/Shop";
import { Auth } from "./pages/Auth";

import { CategoryProducts } from "./components/CategoryProducts";
import { Products } from "./pages/Product";

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  PRODUCT_ROUTE,
  CATEGORY_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },
  {
    path: CATEGORY_ROUTE + "/:category",
    Component: <CategoryProducts />,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: <CategoryProducts />,
  },

];
