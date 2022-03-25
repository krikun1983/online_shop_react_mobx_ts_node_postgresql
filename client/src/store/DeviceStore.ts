import { makeAutoObservable } from "mobx";

export type TypeOrBrand = {
  id: number;
  name: string;
}
export type Devices = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

class DeviceStore {
  private _types: TypeOrBrand[];
  private _brands: TypeOrBrand[];
  private _devices: Devices[];

  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
    ];
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
    ];
    this._devices = [
      { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
      { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '' },
    ];
    makeAutoObservable(this);
  }

  setTypes(types: TypeOrBrand[]) {
    this._types = types;
  }
  setBrands(brands: TypeOrBrand[]) {
    this._brands = brands;
  }
  setDevices(devices: Devices[]) {
    this._devices = devices;
  }


  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}

export default DeviceStore;