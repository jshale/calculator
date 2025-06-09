function Key({ k, onHandleInput, val, onCalc, onHandleClear, onHandleParen }) {
  if (val === "()") {
    return (
      <button className="key-button" onClick={() => onHandleParen()}>
        {k}
      </button>
    );
  }

  if (val === "C") {
    return (
      <button className="key-button" onClick={() => onHandleClear()}>
        {k}
      </button>
    );
  }

  if (val === "=") {
    return (
      <button className="key-button" onClick={() => onCalc()}>
        {k}
      </button>
    );
  }
  return (
    <button className="key-button" onClick={() => onHandleInput(val)}>
      {k}
    </button>
  );
}

export default Key;
