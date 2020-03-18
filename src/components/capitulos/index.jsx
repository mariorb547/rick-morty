import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Search";
import Capitulo from "./Capitulo";
import * as capitulosActions from "../../actions/capitulosActions";
import * as personajesActions from "../../actions/personajesActions";
import Progress from '../Progress';

class Capitulos extends Component {
  
  componentDidMount() {
    console.log(this.props)
    //const respuesta2 = await axios.get("https://rickandmortyapi.com/api/episode/");
    //console.log(respuesta2.data["results"]);
    //this.props.traerTodos();
    
    this.props.traerPersonaje();
    this.props.traerTodos();
  }

  addContenido = () => {
    
    if (this.props.cargando) {
      return <Progress />;
    }
    return this.props.capitulosReducer.capitulos.map(capitulo => (
      <Capitulo
        key={capitulo.id}
        name={capitulo.name}
        air_date={capitulo.air_date}
      />
    ));
   

  };

  render() {
    console.log("pesonaje"+JSON.stringify(this.props.personajesReducer.personaje));
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
export default connect(mapStateToProps, mapDispatchToProps)(Capitulos);

