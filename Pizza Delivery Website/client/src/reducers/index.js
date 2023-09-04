import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productReducer from "./productsReducer";
import cartReducer from "./CartReducer";
import orderReducer from "./orderReducer";
import adminReducer from "./adminReducer";

export const reducers = combineReducers({authReducer, productReducer, cartReducer, orderReducer, adminReducer});