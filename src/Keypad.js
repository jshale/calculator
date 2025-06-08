import Key from "./Key";

const keys = [
  "C",
  "()",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

function Keypad({
  onHandleInput,
  onCalc,
  curIO,
  onHandleClear,
  onHandleParen,
}) {
  return keys.map((key, i) => (
    <Key
      val={keys[i]}
      key={i}
      k={key}
      curIO={curIO}
      onHandleInput={onHandleInput}
      onHandleClear={onHandleClear}
      onHandleParen={onHandleParen}
      onCalc={onCalc}
    />
  ));
}

export default Keypad;
