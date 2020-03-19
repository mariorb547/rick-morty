import { TRAER_TODOS_CAPITULOS,TRAER_CAPITULO, CARGANDO ,ERROR,ACTUALIZAR_CAPITULOS} from "../types/capituloTypes";

const INITIAL_STATE = {
  capitulos: [],
  capitulo:'',
  cargando: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS_CAPITULOS:
      return {
        ...state,
        capitulos: action.payload,
        cargando: false,
        error:''
      };
      case TRAER_CAPITULO:
        return {
          ...state,
          capitulo: action.payload,
          cargando: false,
          error:''
        };
      case ACTUALIZAR_CAPITULOS:
          return {
            ...state,
            capitulo: action.payload,
            cargando: false,
            error:''
          };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state,error: action.payload ,cargando:false};
    
    default:
      return state;
  }
};
