import React, { useState } from "react";
import Board from "../components/Board";

export default function BoardContainer() {
  const [boardSize, setBoardSize] = useState(1);
  const handleChange = ({ target }) => {
    setBoardSize(target.value);
  };

  const numOfTiles = boardSize * boardSize;
  const tiles = [];

  const colorNames = [
    "Aquamarine",
    "BlueViolet",
    "Chartreuse",
    "CornflowerBlue",
    "Thistle",
    "SpringGreen",
    "SaddleBrown",
    "PapayaWhip",
    "MistyRose"
  ];
  const tileSize = window.innerHeight / 2 / boardSize;

  for (let i = 0; i < numOfTiles; i++) {
    if (numOfTiles > 10000) {
      setBoardSize(1);
      return;
    }
    const randomColor =
      colorNames[Math.floor(Math.random() * colorNames.length)];
    tiles.push({
      backgroundColor: randomColor,
      tileSize: tileSize
    });
  }

  return (
    <Board
      name="Jardine"
      size={boardSize}
      onChange={handleChange}
      numOfTiles={numOfTiles}
      tiles={tiles}
    />
  );
}
