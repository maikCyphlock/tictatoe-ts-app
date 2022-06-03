import React from "react";
import { Board, setboard, useBoolean,useState } from "../index";
const ResetBtn = ({
  setBoard,
  setWinner,
  setWin,
  setTurn,
}: {
  setBoard: setboard<Board>;
  setWinner: useState<string>;
  setWin: useBoolean<boolean>;
  setTurn: useState<string>;
}) => {
  const handlerClick = () => {
    setBoard({
      cell: [
        { id: "one", space: "" },
        { id: "two", space: "" },
        { id: "three", space: "" },
        { id: "four", space: "" },
        { id: "five", space: "" },
        { id: "six", space: "" },
        { id: "seven", space: "" },
        { id: "eight", space: "" },
        { id: "nine", space: "" },
      ],
    });
    setWinner("");
    setWin(false);
    setTurn("x");
  };

  return (
    <button onClick={handlerClick} className="ResetBtn">
      <box-icon name="reset" color="#1bcbac"></box-icon>
    </button>
  );
};

export default ResetBtn;
