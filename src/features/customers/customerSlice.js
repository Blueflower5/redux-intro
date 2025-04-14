import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  id: "",
  time: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(name, id, time) {
        return {
          payload: {
            name,
            id,
            time: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.time = action.payload.time;
      },
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
// export default function reducerCustomer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         name: action.payload.name,
//         id: action.payload.id,
//         time: action.payload.time,
//       };
//     case "customer/updateName":
//       return { ...state, name: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(name, id) {
//   return {
//     type: "customer/createCustomer",
//     payload: { name, id, time: new Date().toISOString() },
//   };
// }
// export function updateName(name) {
//   return { type: "customer/updateName", payload: name };
// }
