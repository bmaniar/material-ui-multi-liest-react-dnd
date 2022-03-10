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
  cardContent: {
    paddingTop: "0"
  }
});

const CustomCard = ({ card, index }) => {
  const classes = useStyles();

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

export default CustomCard;
