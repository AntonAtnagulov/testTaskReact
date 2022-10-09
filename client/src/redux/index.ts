import { configureStore } from '@reduxjs/toolkit';
import {useSelector as rawUseSelector, TypedUseSelectorHook} from 'react-redux';
import rtkSlice from './rtkSlice';

export const store = configureStore({
    reducer: {
        toolkit: rtkSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
