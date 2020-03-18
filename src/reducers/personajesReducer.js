import { TRAER_TODOS_PERSONAJES, TRAER_PERSONAJE,CARGANDO_PERSONAJES ,ERROR_PERSONAJES} from "../types/personajeTypes";

const INITIAL_STATE = {
  personajes: [],
  personaje:'',
  cargando: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS_PERSONAJES:
      return {
        ...state,
        personajes: action.payload,
        cargando: false,
        error:''
      };
      case TRAER_PERSONAJE:
      return {
        ...state,
        personaje: action.payload,
        cargando: false,
        error:''
      };
    case CARGANDO_PERSONAJES:
      return { ...state, cargando: true };
    case ERROR_PERSONAJES:
      return { ...state,error: "PERSONAJE NO DISPONIBLES INTERTAR MÁS TARDE" ,cargando:false};

    default:
      return state;
  }
};
