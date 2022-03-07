import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Droppable } from "react-beautiful-dnd";

import CustomCard from "./CustomCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "300px",
    backgroundColor: theme.palette.background.paper,
    margin: "0"
  },
  inline: {
    display: "inline"
  }
}));

const CardList = ({ droppableId, listTitle, cardsData }) => {
  const classes = useStyles();

  return (
    <Droppable droppableId={droppableId}>
      {(provided) => {
        return (
          <List
            className={classes.root}
            aria-labelledby="list-subheader"
            subheader={
              <ListSubheader component="div" id="list-subheader">
                {listTitle}
              </ListSubheader>
            }
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cardsData?.map((card, index) => {
              return card?.id ? (
                <React.Fragment key={card?.id}>
                  <ListItem alignItems="flex-start">
                    <CustomCard card={card} index={index} />
                  </ListItem>
                  <Divider variant="middle" component="li" />
                </React.Fragment>
              ) : null;
            })}

            {provided.placeholder}
          </List>
        );
      }}
    </Droppable>
  );
};

export default CardList;
