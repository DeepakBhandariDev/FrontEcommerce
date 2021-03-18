export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const ADD_ALL_PRODUCTS = "ADD_ALL_PRODUCTS";
export const POST_PRODUCT = "POST_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_ALL_PRODUCTS_TO_CART = "ADD_ALL_PRODUCTS_TO_CART";

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

export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: {
    product: Product;
  };
};

export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART;
  payload: {
    _id: string;
  };
};

export type AddAllProductsToCartAction = {
  type: typeof ADD_ALL_PRODUCTS_TO_CART;
  payload: {
    products: Product[];
  };
};

export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | AddAllProductsToCartAction;

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
