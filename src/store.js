import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";
const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
