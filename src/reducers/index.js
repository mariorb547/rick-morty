import { combineReducers } from "redux";
import capitulosReducer from "./capitulosReducer";
import personajesReducer from "./personajesReducer";
import capituloReducer from "./capituloReducer";


export default combineReducers({
  capitulosReducer,
  personajesReducer,
  capituloReducer
});
