import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Search";
import Personaje from "./Personaje";
import * as capitulosActions from "../../actions/capitulosActions";
import * as personajesActions from "../../actions/personajesActions";
import Progress from "../Progress";
import axios from "axios";

class Personajes extends Component {
  componentDidMount() {
    this.props.traerTodosPersonajes();
    this.props.traerTodos();
  }
async componentWillMount(){
  const respuesta = await axios.get("https://rickandmortyapi.com/api/episode/12");
 console.log("resputa busqueda "+JSON.stringify(respuesta));
}
  addContenido = () => {
    if (this.props.personajesReducer.cargando) {
      return <Progress />;
    }
    return this.props.personajesReducer.personajes.map(personaje => (
       
      <Personaje key={personaje.id} personaje={personaje} />
    ));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Search />
        {this.addContenido()}
      </div>
    );
  }
}

const mapStateToProps = ({personajesReducer, capitulosReducer}) => {
  return { personajesReducer, capitulosReducer };
};
const mapDispatchToProps={
...personajesActions,
...capitulosActions 

}
export default connect(mapStateToProps, mapDispatchToProps)(Personajes);
