export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const ADD_ALL_PRODUCTS = "ADD_ALL_PRODUCTS";
export const POST_PRODUCT = "POST_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const ADD_QTY = "ADD_QTY";
export const SUBTRACT_QUANTITY_CART_ITEM = "SUBTRACT_QUANTITY_CART_ITEM";


export type User = {
  isAdmin: boolean;
  _id: string;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Users = {
  users: User[];
};

export type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  countInStock: number;
  quantity?:number;
};

export type Products = {
  products: Product[];
};

export type OrderItems = {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: string;
};

export type ShippingAddress = {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export type Order = {
  orderItems: [OrderItems];
  shippingAddress: [ShippingAddress];
  user: string;
};

export type Orders = {
  orders: Order[];
};

export type LoginAction = {
  type: typeof LOGIN_USER;
  payload: {
    user: User;
    token: string;
  };
};

export type AddAllProductsAction = {
  type: typeof ADD_ALL_PRODUCTS;
  payload: {
    products: Product[];
  };
};

export type PostProductAction = {
  type: typeof POST_PRODUCT;
  payload: {
    product: Product;
  };
};

export type ProductsActions = AddAllProductsAction | PostProductAction;

export type addToCart = {
  type: typeof ADD_TO_CART;
  payload: {
    product: Product;
    quantityToAdd:number;
};
};

export type deleteCartItem = {
  type: typeof DELETE_CART_ITEM;
  payload: {
    product: Product
  };
};
export type addQuantity = {
  type: typeof ADD_QTY;
  payload: {
    _id: string;
    quantityToAdd: number;
  };
};
export type subtractQuantityToCartItem = {
  type: typeof SUBTRACT_QUANTITY_CART_ITEM;
  payload: {
    _id: string;
  };
};

export type CartActions =
  | addToCart
  | deleteCartItem
  | addQuantity
  

export type ProductsState = {
  products: Product[];
};

export type AuthState = {
  token: string;
  isAuthenticated: boolean;
  user: User;
};

export type CartState = {
  cartProducts: Product[];
};

export type AppState = {
  user: AuthState;
  product: ProductsState;
  cart: CartState;
};
