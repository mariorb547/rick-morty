import React, { Component , useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../Search";
import Personaje from "./Personaje";
import * as capitulosActions from "../../actions/capitulosActions";
import * as personajesActions from "../../actions/personajesActions";
import Progress from "../Progress";
import axios from "axios";
function getClickablePages(actualPage) {
  const offsets = [0, 1, 2, 3, 4];
  return offsets.map(number => parseInt(actualPage, 10) + number);
}

function getPage(direction, actualPage) {
  const nextPage = parseInt(actualPage, 10) + direction;

  return nextPage >= 0 ? nextPage : 1;
}
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(false);
const clickablePages = getClickablePages(Number(match.params.page) || 1);
const page = Number(match.params.page) || 1;

useEffect(() => {
  async function loadData() {
    setLoading(true);
    const apiResponse = await api.get(`/?page=${page}`);

    setCharacters(apiResponse.data.results);
    setLoading(false);
  }

  loadData();
}, [match.params.page, page]);

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
