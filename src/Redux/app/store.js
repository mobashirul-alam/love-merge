import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiSlice from "../api/apiSlice";
import filterSlice from "../features/filter/filterSlice";
import userInfo from "../features/userInfo/userInfo";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    userInfo: userInfo,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        persistedReducer,
        filter: filterSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
});

export default store;
