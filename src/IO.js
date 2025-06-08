function IO({ curIO, setCurIO }) {
  return (
    <input onChange={(e) => setCurIO(e.target.value)} value={curIO}></input>
  );
}

export default IO;
