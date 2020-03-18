import {TRAER_CAPITULO} from "../types/capitulo2Types";

const INITIAL_STATE = {
  
  capitulo2:""

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
       case TRAER_CAPITULO:
        return {
          ...state,
          capitulo2:"Hola soy maio"
          
        };
    default:
      return state;
  }
};
