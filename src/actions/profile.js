import { store } from "reducers";
import { ActionType } from "reducers/profile";

const login = (profile) => {
  store.dispatch({
    type: ActionType.USER_LOGIN,
    data: profile,
  });
  localStorage.setItem("profile", JSON.stringify(profile));
};

const logout = () => {
  store.dispatch({
    type: ActionType.USER_LOGOUT,
  });
  localStorage.removeItem("profile");
};

export const profileAction = {
  ActionType,
  login,
  logout,
};
