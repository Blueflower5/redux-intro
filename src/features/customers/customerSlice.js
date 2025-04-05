const initialStateCustomer = {
  name: "",
  id: "",
  time: "",
};

export default function reducerCustomer(state = initialStateCustomer, action) {
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

export function createCustomer(name, id) {
  return {
    type: "customer/createCustomer",
    payload: { name, id, time: new Date().toISOString() },
  };
}
export function updateName(name) {
  return { type: "customer/updateName", payload: name };
}
