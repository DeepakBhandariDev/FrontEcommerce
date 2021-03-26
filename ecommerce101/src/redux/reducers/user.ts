import { AuthState, UserAction, LOGIN_USER, LOGOUT_USER } from "../../types";

const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  user: {
    isAdmin: false,
    _id: "",
    name: "",
    email: "",
    imageUrl: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
};

export default function user(
  state = initialState,
  action: UserAction
): AuthState {
  switch (action.type) {
    case LOGIN_USER: {
      const { user, token } = action.payload;
      return {
        token: token,
        isAuthenticated: true,
        user: user,
      };
    }

    case LOGOUT_USER: {
      return {
        token: "",
        isAuthenticated: false,
        user: {
          isAdmin: false,
          _id: "",
          name: "",
          email: "",
          imageUrl: "",
          createdAt: "",
          updatedAt: "",
          __v: 0,
        },
      };
    }

    // Always return new state (e.g, new object) if changed

    default:
      return state;
  }
}
