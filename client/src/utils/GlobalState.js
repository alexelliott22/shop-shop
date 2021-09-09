import {createStore} from 'redux';
import { reducer } from './reducers'


const store = createStore(
  reducer,
  {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  }
);

export  default store;