import axios from "axios";
import {
  TRAER_TODOS_CAPITULOS,
  CARGANDO,
  ERROR,
  TRAER_CAPITULO,ACTUALIZAR_CAPITULOS
  
} from "../types/capituloTypes";
export const traerTodos = () => async dispatch => {
  dispatch({
    type: CARGANDO
  });

  try {
    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/episode/"
    );
    respuesta.data["results"] = respuesta.data["results"].sort(function(a, b) {
      var x = a["air_date"],
        y = b["air_date"];
      return x > y ? -1 : x < y ? 1 : 0;
    });

    dispatch({
      type: TRAER_TODOS_CAPITULOS,
      payload: respuesta.data["results"]
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.menssage
    });
  }
};

//trater por episodio
export const traerCapitulo = id => async dispatch => {
  try {
    const respuesta = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);

    dispatch({
      type: TRAER_CAPITULO,
      payload: respuesta.data
    });
  } catch (error) {}
};

export const actualizarCapitulos = (capitulos_actualizar) =>  (dispatch,getState) => {
  const {capitulos}=getState().capitulosReducer;
  const capitulos_actualizados=[
    ...capitulos,
    capitulos_actualizar
  ];
  dispatch({
    type: CARGANDO
  });

  try {
    
    dispatch({
      type: ACTUALIZAR_CAPITULOS,
      payload:capitulos_actualizados
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.menssage
    });
  }
};