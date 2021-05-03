import { store } from "reducers";
import { ActionType } from "reducers/coreui";

const updateDarkmode = (darkmode) => {
  store.dispatch({
    type: ActionType.GET_DARKMODE,
    data: darkmode,
  });
  localStorage.setItem("darkmode", darkmode);
};

const updateLanguage = (language) => {
  store.dispatch({
    type: ActionType.GET_LANGUAGE,
    data: language,
  });
  localStorage.setItem("language", language);
};

export const coreuiAction = {
  ActionType,
  updateDarkmode,
  updateLanguage,
};
