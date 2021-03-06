import React, { useCallback, useState } from "react";
import { setToken } from "helpers/http/client";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getProfile } from "helpers/http/apis";
import { UserType } from "modules/add-email/types";
import authReducer, { ActionTypes, INITIAL_STATE } from "./auth-reducer";
import { getStep } from "const/stepper";
import { Step } from "types/steps.type";

interface AuthContextType {
  authorize: (token: string) => void;
  isBootstrapped: boolean;
  isAuthenticated: boolean;
  user: null | UserType;
  error: null | string;
  activeStep: any;
  onNextStep: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  authorize: () => {},
  user: null,
  isAuthenticated: false,
  isBootstrapped: false,
  error: null,
  activeStep: "default",
  onNextStep: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const [authState, dispatch] = React.useReducer(authReducer, INITIAL_STATE);
  const [currentStep, setCurrentStep] = useState<Step>("default");

  const activeStep = React.useMemo<any>(() => {
    const current = getStep(currentStep);
    return current || {};
  }, [currentStep]);

  const onNextStep = useCallback(() => {
    const nextStep = getStep(activeStep?.next);
    setCurrentStep(activeStep?.next);
    nextStep?.path && navigate(nextStep?.path);
  }, [activeStep?.next, navigate]);

  const getUserProfile = useCallback((cb?: () => void) => {
    getProfile()
      .then((res) => {
        dispatch({ type: ActionTypes.AUTHORIZE_USER, payload: res.data });
        cb && cb();
        const step = getStep(res.data.active_step);
        setCurrentStep(res.data.active_step);
        step?.path && navigate(step?.path);
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.AUTHORIZATION_FAILED,
          payload: err?.response?.data?.message || err?.toString(),
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setToken(token);
      getUserProfile();
      return;
    }
    dispatch({ type: ActionTypes.SET_BOOTSTRAPPED });
  }, [getUserProfile]);

  const authorize = React.useCallback(
    (token: string) => {
      Cookies.set("token", token, { expires: 30 });
      setToken(token);
      getUserProfile(() => navigate("/discord"));
    },
    [getUserProfile, navigate]
  );

  const value = React.useMemo(() => {
    const { user, error, isAuthenticated, isBootstrapped } = authState;
    return {
      authorize,
      user,
      isAuthenticated,
      isBootstrapped,
      error,
      activeStep,
      onNextStep,
    };
  }, [authState, authorize, activeStep, onNextStep]);

  return authState.isBootstrapped ? (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  ) : null;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
