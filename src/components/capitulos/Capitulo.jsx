import React from "react";
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
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Capitulo({capitulo}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img width="75px" src="https://i.blogs.es/fde0b7/rick-y-morty-temporada-4-diciembre-22-netflix-mexico/1366_2000.jpg" alt="img rickandmorty" />
          </Avatar>
        }
        action={
          <Link to={`/personajes/${capitulo.id}`}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Link>
        }
        title={capitulo.name}
        subheader={capitulo.air_date}
      />
      
      <CardContent>
      <iframe width="300" height="290" src="https://www.youtube.com/embed/_BCQtmEVYJY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      episode:{capitulo.episode}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={`/personajes/${capitulo.id}`}>
            Ir a Personajes
          </Link>
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
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
