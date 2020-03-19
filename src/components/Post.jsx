import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Search";
import Capitulo from "./Capitulo";
import * as capitulosActions from "../../actions/capitulosActions";
import * as personajesActions from "../../actions/personajesActions";
import Progress from "../Progress";
import axios from "axios";
import { textAlign } from "@material-ui/system";
import Pagination from "./Pagination";
class Capitulos extends Component {
  
  async componentDidMount() {
    if (this.props.match.params.id) {
      if (!this.props.personajesReducer.personaje.leght) {
        await this.props.traerPersonaje(this.props.match.params.id);
      }
    }
    await this.props.traerTodos();
  }

  componentWillUpdate() {}

  addContenido = () => {
    if (this.props.cargando) {
      return <Progress />;
    }

    if (this.props.match.params.id) {
      var capitlosAux = [];
      this.props.capitulosReducer.capitulos.map(characters => {
        var result = characters["characters"].filter(
          word => word == this.props.personajesReducer.personaje["url"]
        );
        if (result != "") {
          console.log("Result" + result);
          capitlosAux.push(characters);
        }
      });

      return capitlosAux.map(capitulo => (
        <Capitulo key={capitulo.id} capitulo={capitulo} />
      ));
    } else {
      return this.props.capitulosReducer.capitulos.map(capitulo => (
        <Capitulo key={capitulo.id} capitulo={capitulo} />
      ));
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div  >
        <Search />
        </div>
        <h1>CAPITULOS</h1>
        {this.addContenido()}
        
      </div>
    );
  }
}

const mapStateToProps = ({ personajesReducer, capitulosReducer }) => {
  return { personajesReducer, capitulosReducer };
};
const mapDispatchToProps = {
  ...personajesActions,
  ...capitulosActions
};
export default connect(mapStateToProps, mapDispatchToProps)(Capitulos);
