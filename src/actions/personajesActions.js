import axios from "axios";
import {
  TRAER_TODOS_PERSONAJES,
  CARGANDO_PERSONAJES,
  ERROR_PERSONAJES,
  TRAER_PERSONAJE
} from "../types/personajeTypes";
export const traerTodosPersonajes = () => async dispatch => {
  dispatch({
    type: CARGANDO_PERSONAJES
  });

  try {
    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );

    dispatch({
      type: TRAER_TODOS_PERSONAJES,
      payload: respuesta.data["results"]
    });
  } catch (error) {
    dispatch({
      type: ERROR_PERSONAJES,
      payload: error.menssage
    });
  }
};

export const traerPersonaje = () => async dispatch => {
  dispatch({
    type: CARGANDO_PERSONAJES
  });

  try {
    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/1"
    );

    dispatch({
      type: TRAER_PERSONAJE,
      payload: respuesta
    });
  } catch (error) {
    dispatch({
      type: ERROR_PERSONAJES,
      payload: error.menssage
    });
  }
};


