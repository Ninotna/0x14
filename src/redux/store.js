import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import employeesReducer from './employeesSlice';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	employees: employeesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
