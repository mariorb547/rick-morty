import React, { Fragment, Component } from "react";
import {Link} from "react-router-dom";
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
import moment from "moment";
import { connect } from "react-redux";
import * as capituloActions from "../../actions/capituloActions";
import { render } from "@testing-library/react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "25%",
    height: 500,
    display: "inline-block",
    margin: "10px"
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
  avatar: {
    backgroundColor: red[500]
  },
  letra: {
    backgroundColor: red[500]
  }
}));

 

const Capitulo= ({ personaje })=> {
  
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  
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
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={personaje.name}
        subheader={moment(personaje.created).format('lll') }
      />
      <CardMedia
        className={classes.media}
        image={personaje.image}
        title="Paella dish"
      />
      <CardContent>
        <div >
          STATUS: {personaje.status}
          <Divider />
          SPECIES:{personaje.species}
          <Divider />
          GENDER:{personaje.gender}
          <Divider />
          ORIGIN:{personaje.origin["name"]}
          <Divider />
          LOCATION:{personaje.location["name"]}
          <Divider />
          <div>
            <Link to={`/capitulos/${personaje.id}`}>
              ir a
            </Link>
          </div>
          
         
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  )
  
}

export default Capitulo;
