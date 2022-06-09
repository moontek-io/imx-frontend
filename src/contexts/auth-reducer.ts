export const INITIAL_STATE = {
  isBootstrapped: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export enum ActionTypes {
  SET_BOOTSTRAPPED = "SET_BOOTSTRAPPED",
  AUTHORIZE_USER = "AUTHORIZE_USER",
  AUTHORIZATION_FAILED = "AUTHORIZATION_FAILED",
  LOGOUT = "LOGOUT",
}

// An interface for our actions
export interface AuthAction {
  type: ActionTypes;
  payload?: any;
}

function authReducer(state = INITIAL_STATE, action: AuthAction) {
  switch (action.type) {
    case "SET_BOOTSTRAPPED":
      return { ...state, isBootstrapped: true };
    case "AUTHORIZATION_FAILED":
      return {
        ...state,
        user: null,
        isBootstrapped: true,
        error: action.payload,
      };
    case "AUTHORIZE_USER":
      return {
        ...state,
        isAuthenticated: true,
        isBootstrapped: true,
        user: action.payload,
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}

export default authReducer;
