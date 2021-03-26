
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const ADD_ALL_PRODUCTS = "ADD_ALL_PRODUCTS";
export const POST_PRODUCT = "POST_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_ALL_PRODUCTS_TO_CART = "ADD_ALL_PRODUCTS_TO_CART";
export const POST_ORDER = "POST_ORDER"
export const ADD_ALL_ORDER = "ADD_ALL_ORDER"

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

export type Items = {
  qty: number;
  productId: string;
};

export type ShippingAddress = {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export type Order = {
  cartProducts: [Items]
  shippingAddress: ShippingAddress
  userId: string
};


export type LoginAction = {
  type: typeof LOGIN_USER;
  payload: {
    user: User;
    token: string;
  };
};

export type LogOutAction = {
  type: typeof LOGOUT_USER;
};


export type UserAction = LogOutAction | LoginAction



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

export type OrderAction = {
  type: typeof ADD_ALL_ORDER;
  payload: {
    orders: Order[]; 
  }
}

export type AddToCart = {
  type: typeof ADD_TO_CART;
  payload: {
    product: Product;
    quantityToAdd:number;
};
};

export type RemoveItem = {
  type: typeof REMOVE_ITEM;
  payload: {
    product: Product
  };
};
export type AddQuantity = {
  type: typeof ADD_QUANTITY;
  payload: {
    product:Product;
  };
};
export type SubtractQuantity = {
  type: typeof SUB_QUANTITY;
  payload: {
    product:Product;
  };
};
export type AddAllProductsCart = {
  type: typeof ADD_ALL_PRODUCTS_TO_CART;
  payload: {
    cartProducts:Product[];
  };
};

export type CartActions =
  | AddToCart
  | RemoveItem
  | SubtractQuantity
  | AddQuantity
  | AddAllProductsCart
  

export type ProductsState = {
  products: Product[];
};

export type OrderState = {
  orders: Order[];
};

export type AuthState = {
  token: string;
  isAuthenticated: boolean;
  user: User;
};

export type PostOrderAction = {
  type:typeof POST_ORDER,
  payload:{
    shippingAddress:ShippingAddress
  }
}

export type CartState = {
  cartProducts: Product[];
  total: number;
};




export type AppState = {
  user: AuthState;
  product: ProductsState;
  cart: CartState;
  order: OrderState;
};
