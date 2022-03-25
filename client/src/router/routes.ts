import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import BasketPage from "../pages/BasketPage";
import DevicePage from "../pages/DeviceShop";
import ShopPage from "../pages/ShopPage";
import PathsRouter from "../types/enum_paths_router";

export const authRoutes = [
  {
    path: PathsRouter.ADMIN_ROUTER,
    Element: AdminPage,
  },
  {
    path: PathsRouter.BASKET_ROUTER,
    Element: BasketPage,
  }
];

export const publicRoutes = [
  {
    path: PathsRouter.SHOP_ROUTER,
    Element: ShopPage,
  },
  {
    path: PathsRouter.LOGIN_ROUTER,
    Element: AuthPage,
  },
  {
    path: PathsRouter.REGISTRATION_ROUTER,
    Element: AuthPage,
  },
  {
    path: PathsRouter.DEVICE_ROUTER + '/:id',
    Element: DevicePage,
  },
];