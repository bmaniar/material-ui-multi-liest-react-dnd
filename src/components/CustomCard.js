import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  cardContent: {
    paddingTop: "0"
  }
});

const ScrumCard = ({ card, index }) => {
  const classes = useStyles();

  const [cardContent, setCardContent] = useState({});

  const id = card?.id;

  const deleteHandler = (event) => {};

  const handleChange = (event) => {
    setCardContent({
      ...cardContent,
      [event.target.name]: event.target.value
    });
  };

  const updateHandler = (event) => {};

  return (
    <Draggable draggableId={card?.id} index={index}>
      {(provided) => {
        return (
          <Card
            className={classes.root}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" component="h2">
                {card?.title}
              </Typography>
              <Typography variant="body2" component="p">
                {card?.content}
              </Typography>
            </CardContent>
          </Card>
        );
      }}
    </Draggable>
  );
};

export default ScrumCard;
