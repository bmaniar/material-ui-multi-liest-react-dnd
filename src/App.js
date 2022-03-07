import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext } from "react-beautiful-dnd";

import CardList from "./components/CardList";
import { list1, list2 } from "../data/";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "25px",
    justifyContent: "space-between"
  }
});

export default function App() {
  const classes = useStyles();
  const [listData1, setListData1] = useState(list1);
  const [listData2, setListData2] = useState(list2);

  const columnMap = [
    {
      columnId: "list1",
      title: "List 1",
      cards: listData1,
      updateDataMethod: setListData1
    },
    {
      columnId: "list2",
      title: "List 2",
      cards: listData2,
      updateDataMethod: setListData2
    }
  ];
  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const sourceListItem = columnMap.find(
      (column) => column.columnId === source.droppableId
    );
    const sourceNewCardData = [...sourceListItem?.cards];
    const [removedCard] = sourceNewCardData.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceNewCardData.splice(destination.index, 0, removedCard);
    } else {
      const destinationListItem = columnMap.find(
        (column) => column.columnId === destination.droppableId
      );
      const destinationNewCardData = [...destinationListItem?.cards];
      destinationNewCardData.splice(destination.index, 0, removedCard);
      destinationListItem.updateDataMethod(destinationNewCardData);
    }
    sourceListItem.updateDataMethod(sourceNewCardData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container maxWidth="lg" className={classes.container}>
        {columnMap.map((column) => (
          <CardList
            key={column.columnId}
            droppableId={column.columnId}
            listTitle={column.title}
            cardsData={column.cards}
          />
        ))}
      </Container>
    </DragDropContext>
  );
}
