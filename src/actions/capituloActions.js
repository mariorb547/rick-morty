import axios from "axios";
import {TRAER_CAPITULO} from "../types/capitulo2Types";
;

//trater por episodio
export const traerCapitulo = () => async dispatch => {
  


  try{
  const respuesta = await axios.get("https://rickandmortyapi.com/api/episode/12");
 
  dispatch({
    type: TRAER_CAPITULO,
    payload: respuesta
  });
} catch(error){
 
}
};

