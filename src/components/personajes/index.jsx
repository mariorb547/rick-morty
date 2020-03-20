import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Personaje from "./Personaje";
import * as capitulosActions from "../../actions/capitulosActions";
import * as personajesActions from "../../actions/personajesActions";
import Progress from "../Progress";
import AccountCircle from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";

class Personajes extends Component {
  state = {
    search: ""
  };

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

  onchange = e => {
    this.setState({ search: e });
  };

  render() {
    const { search } = this.state;
    var personajesAux = [];
    if (this.props.match.params.id) {
      this.props.personajesReducer.personajes.map(personajes => {
        var result = personajes["episode"].filter(
          personaje => personaje == this.props.capitulosReducer.capitulo["url"]
        );
        if (result != "") {
          personajesAux.push(personajes);
        }
      });
    } else {
      personajesAux = this.props.personajesReducer.personajes;
    }

    const filteredCountries = personajesAux.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <TextField
          id="input-with-icon-textfield"
          label=""
          placeholder="Buscar..."
          onChange={e => this.onchange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />

        <h1>PERSONAJES</h1>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {filteredCountries.map(personaje => {
              return <Personaje key={personaje.id} personaje={personaje} />;
            })}
          </Grid>
        </Container>
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
