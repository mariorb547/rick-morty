import React, { Component } from "react";
import { connect } from "react-redux";
import Capitulo from "./Capitulo";
import * as capitulosActions from "../../actions/capitulosActions";
import * as personajesActions from "../../actions/personajesActions";
import Progress from "../Progress";
import TextField from '@material-ui/core/TextField';
import AccountCircle from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";

class Capitulos extends Component {
  state = {
    search: ""
  };

  async componentDidMount() {
    if (this.props.match.params.id) {
      if (!this.props.personajesReducer.personaje.leght) {
        await this.props.traerPersonaje(this.props.match.params.id);
      }
    }
    await this.props.traerTodos();
  }

  componentWillUpdate() {}

  
  onchange = e => {
    this.setState({ search: e });
  };


  render() {
    const { search } = this.state;
    var capitulos=[];
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
      capitulos=capitlosAux;
     
    } else {
      capitulos=this.props.capitulosReducer.capitulos;
      
    }
    const filteredCountries =capitulos.filter(
      country => {
        return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
    );
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
          ),
        }}
      />
        <h1>CAPITULOS</h1>
        <Container maxWidth="md">
          <Grid container spacing={4}>
        {filteredCountries.map(capitulo => {
          return <Capitulo key={capitulo.id} capitulo={capitulo} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(Capitulos);