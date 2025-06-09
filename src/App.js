import "./App.css";
import Keypad from "./Keypad.js";
import IO from "./IO.js";
import History from "./History.js";
import { useState } from "react";

function App() {
  const [curIO, setCurIO] = useState("");
  const [historyArr, setHistoryArr] = useState([]);

  function handleCalc() {
    if (!curIO) return;
    const newHistoryItem = {
      equation: curIO,
      result: eval(curIO),
      id: historyArr.length + 1,
    };
    setHistoryArr([newHistoryItem, ...historyArr]);
    setCurIO(eval(curIO));
    handleClear();
    console.log(newHistoryItem.id);
  }

  function handleClear() {
    setCurIO("");
  }

  function handleInput(key) {
    // console.log(key);
    setCurIO((cur) => cur + key);
  }

  function handleParen() {
    if (curIO.includes("(")) {
      handleInput(")");
    } else {
      handleInput("(");
    }
  }

  function handlePasteHistory(history) {
    setCurIO((cur) => cur + history);
  }

  return (
    <div className="App">
      <div>
        <div className="IOcontainer">
          <IO className="IO" curIO={curIO} setCurIO={setCurIO} />
        </div>
        <Keypad
          className="keypad"
          onCalc={handleCalc}
          onHandleClear={handleClear}
          onHandleInput={handleInput}
          onHandleParen={handleParen}
          curIO={curIO}
        />
      </div>
      <div className="history">
        <History historyArr={historyArr} onPasteHistory={handlePasteHistory} />
      </div>
    </div>
  );
}

export default App;
