function Key({ k, onHandleInput, val, onCalc, onHandleClear, onHandleParen }) {
  if (val === "()") {
    return <button onClick={() => onHandleParen()}>{k}</button>;
  }

  if (val === "C") {
    return <button onClick={() => onHandleClear()}>{k}</button>;
  }

  if (val === "=") {
    return <button onClick={() => onCalc()}>{k}</button>;
  }
  return <button onClick={() => onHandleInput(val)}>{k}</button>;
}

export default Key;
