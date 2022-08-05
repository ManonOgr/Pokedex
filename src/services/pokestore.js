import { configureStore } from '@reduxjs/toolkit';

import pokesliceReducer from './pokeslice';


export const store = configureStore({
    // Invoque automatiquement "combineReducers":
    reducer: {
        slicelike: pokesliceReducer,
    }
});