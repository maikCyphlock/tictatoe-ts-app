import React from "react";
import { Board, setboard, useBoolean,useState } from "../index";


const ResetBtn = ({
  setBoard,
  setWinner,
  setWin,
  setTurn,
}: {
  setBoard: setboard<Board> | any;
  setWinner: useState<string> | any;
  setWin: useBoolean<boolean> | any;
  setTurn: useState<string> | any ;
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
    
      <i className='bx bx-reset' style={{color:'#1bcbac',fontSize:'1.2rem'}}></i>
      
    </button>
  );
};

export default ResetBtn;
