import { configureStore } from '@reduxjs/toolkit';
import reducer from './App/redusers/reducer';


const store = configureStore({ reducer });

export default store;
