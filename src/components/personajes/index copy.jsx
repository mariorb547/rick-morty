import React, { Component , useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../Search";
import Personaje from "./Personaje";
import * as capitulosActions from "../../actions/capitulosActions";
import * as personajesActions from "../../actions/personajesActions";
import Progress from "../Progress";
import axios from "axios";


class Personajes extends Component {
  
  async componentDidMount() {
    if (this.props.match.params.id) {
      if (!this.props.personajesReducer.personaje.leght) {
        await this.props.traerCapitulo(this.props.match.params.id);
      }
    }
    await this.props.traerTodosPersonajes();
  }

  addContenido = () => {
    if (this.props.personajesReducer.cargando) {
      return <Progress />;
    }

    if (this.props.match.params.id) {
      var personajesAux = [];
      this.props.personajesReducer.personajes.map(personajes => {
        var result = personajes["episode"].filter(
          personaje => personaje == this.props.capitulosReducer.capitulo["url"]
        );
        if (result != "") {
          personajesAux.push(personajes);
        }
      });

      return personajesAux.map(personaje => (
        <Personaje key={personaje.id} personaje={personaje} />
      ));
    } else {
      return this.props.personajesReducer.personajes.map(personaje => (
        <Personaje key={personaje.id} personaje={personaje} />
      ));
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Search />
        <h1>PERSONAJES</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(Personajes);
