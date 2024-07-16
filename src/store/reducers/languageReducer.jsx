import { SET_LANGUAGE } from "../actions/languageActions";
import { dataTR } from "../../Datas/tr";

const initialState = dataTR;

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
