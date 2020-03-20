import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import moment from "moment";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Personaje({ personaje }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item key={personaje.id} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={personaje.image}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {personaje.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
               {moment(personaje.created).format("lll")}
            </Typography>
            <Typography>  STATUS: {personaje.status}</Typography>
            <Typography>   SPECIES:{personaje.species}</Typography>
            <Typography>   GENDER:{personaje.gender}</Typography>
            <Typography>  ORIGIN:{personaje.origin["name"]}</Typography>
            <Typography> LOCATION:{personaje.location["name"]}</Typography>
          </CardContent>
          <CardActions>
             
            <Button size="small" color="primary">
               <Link to={`/capitulos/${personaje.id}`}>Ir a capitulos</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
