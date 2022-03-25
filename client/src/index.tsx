import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore, { Devices, TypeOrBrand } from './store/DeviceStore';
import UserStore from './store/UserStore';

interface TsUserStore {
  user: {
    isAuth: boolean;
    user: {};
  }
  device: {
    types: TypeOrBrand[];
    brands: TypeOrBrand[];
    devices: Devices[];
  }
}

export const Context = createContext({} as TsUserStore);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);

