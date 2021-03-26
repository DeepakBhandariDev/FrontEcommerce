import { OrderState, OrderAction, ADD_ALL_ORDER } from "./../../types";

const initialState: OrderState = {
  /* cartProducts: [{ productId: "", quantity:0 }],
  shippingAddress: {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  },
  userId: "", */
  orders: []
};

export default function order(
  state = initialState,
  action: OrderAction
): OrderState {
  switch (action.type) {
    case ADD_ALL_ORDER: {
      const { orders } = action.payload;
      console.log(orders)
      return {
        ...state,
        orders: [...orders],
      };
    }
    default:
      return state;
  }
}
