import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import productReducer from '../redux/slices/ProductSlice';
import basketReducer from '../redux/slices/basketSlice';


export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer,
    },
});

