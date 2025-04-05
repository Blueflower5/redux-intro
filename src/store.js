import { combineReducers, createStore } from "redux";
const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initialStateCustomer = {
  name: "",
  id: "",
  time: "",
};
function reducerAccount(state = initalStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function reducerCustomer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        time: action.payload.time,
      };
    case "customer/updateName":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});

const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 1000 });
// store.dispatch({ type: "account/withdraw", payload: 800 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 5000, purpose: "car" },
// });
// store.dispatch({ type: "account/payLoan" });
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(payLoan());

console.log(store.getState());

function createCustomer(name, id) {
  return {
    type: "customer/createCustomer",
    payload: { name, id, time: new Date().toISOString() },
  };
}
function updateName(name) {
  return { type: "customer/updateName", payload: name };
}

store.dispatch(createCustomer("John Doe", "12345"));
console.log(store.getState());
