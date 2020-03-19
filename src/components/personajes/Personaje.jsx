import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Divider } from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

import moment from "moment";
import { connect } from "react-redux";

import { render } from "@testing-library/react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "25%",
    height: 510,
    display: "inline-block",
    margin: "10px",
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {},
  letra: {
    backgroundColor: red[500]
  },
  backgroundColor: {
    backgroundColor: "#e0e0e0",
    borderRadius: "27px 27px 27px 27px"
  },
  TextLeft: {
    textAlign: "left",
    backgroundColor: "#e8f5e9",
    borderRadius: "5px 5px 5px 5px"
  },
  typography: {
    fontFamily: ["Roboto"]
  },
  menu: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400
  }
}));

const Capitulo = ({ personaje }) => {
  const classes = useStyles();
  const [expanded, setExpanded, anchorEl, setAnchorEl] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img
              width="75px"
              src="https://i.blogs.es/fde0b7/rick-y-morty-temporada-4-diciembre-22-netflix-mexico/1366_2000.jpg"
              alt="img rickandmorty"
            />
          </Avatar>
        }
        action={
          <Fragment>
            <Link to={`/capitulos/${personaje.id}`}>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </Link>
          </Fragment>
        }
        title={personaje.name}
        subheader={moment(personaje.created).format("lll")}
      />
      <CardMedia
        alt="Contemplative Reptile"
        title="Contemplative Reptile"
        className={classes.media}
        image={personaje.image}
        title="Paella dish"
      />
      <CardContent>
        <div className={(classes.backgroundColor, classes.TextLeft)}>
          <span className={classes.fontFamily}>STATUS: {personaje.status}</span>
          <Divider />
          SPECIES:{personaje.species}
          <Divider />
          GENDER:{personaje.gender}
          <Divider />
          ORIGIN:{personaje.origin["name"]}
          <Divider />
          LOCATION:{personaje.location["name"]}
          <Divider />
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Capitulo;
