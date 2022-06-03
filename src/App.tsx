import { useState, useEffect } from "react";
import ModalWin from "./components/ModalWin";
import Nav from "./components/Nav";
import ResetBtn from "./components/ResetBtn";
import { Board } from "./index";

function App() {
  const [board, setBoard] = useState<Board>({
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
  const [turn, setTurn] = useState("x");
  const [win, setWin] = useState(false);
  const [winner, setWinner] = useState("");

  const handlerClick = (e: any) => {
    if (win) {
      return 0;
    }
    const ID = e.target.id;
    console.log(ID);

    setBoard((element) => {
      const newBoard = { ...element };
      newBoard.cell.map((cell) => {
        if (cell.id === ID && cell.space === "") {
          cell.space = turn;
        }
      });

      return newBoard;
    });

    setTurn((prev) => (prev === "o" ? "x" : "o"));
  };

  const checkWinner = (element: any) => {
    if (
      board.cell[0].space.includes(element) &&
      board.cell[4].space.includes(element) &&
      board.cell[8].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    if (
      board.cell[6].space.includes(element) &&
      board.cell[4].space.includes(element) &&
      board.cell[2].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    if (
      board.cell[1].space.includes(element) &&
      board.cell[4].space.includes(element) &&
      board.cell[7].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    if (
      board.cell[0].space.includes(element) &&
      board.cell[1].space.includes(element) &&
      board.cell[2].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    if (
      board.cell[0].space.includes(element) &&
      board.cell[3].space.includes(element) &&
      board.cell[6].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    if (
      board.cell[2].space.includes(element) &&
      board.cell[5].space.includes(element) &&
      board.cell[8].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    if (
      board.cell[3].space.includes(element) &&
      board.cell[4].space.includes(element) &&
      board.cell[5].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    if (
      board.cell[6].space.includes(element) &&
      board.cell[7].space.includes(element) &&
      board.cell[8].space.includes(element)
    ) {
      setWinner(`${element} wins`);
    }
    const checkdraw = board.cell.every((cell) => {
      if (cell.space !== "") {
        return true;
      }
    });

    if (checkdraw && !win) {
      setWinner("draw");
    }
  };

  useEffect(() => {
    checkWinner("x");
    checkWinner("o");
  }, [board]);

  useEffect(() => {
    if (winner) {
      setWin(true);
    }
  }, [winner]);
  return (
    <main className="container">
      <Nav />
      <ResetBtn
        setBoard={setBoard}
        setWinner={setWinner}
        setTurn={setTurn}
        setWin={setWin}
      />
      <div className="board">
        {board.cell.map((e, index) => {
          return (
            <div className="board-cell">
              <input
                id={e.id.toString()}
                onClick={handlerClick}
                type="button"
                value={e.space}
              ></input>
            </div>
          );
        })}
      </div>
      {winner ? <ModalWin winner={winner} open /> : null}
    </main>
  );
}

export default App;
