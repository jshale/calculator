function HistoryItem({ equation, result, onPasteHistory }) {
  if (equation === result) {
    return <div onClick={() => onPasteHistory(result)}>{result}</div>;
  }
  return (
    <li>
      <div onClick={() => onPasteHistory(equation)}>{equation}=</div>
      <div onClick={() => onPasteHistory(result)}>{result}</div>
    </li>
  );
}

export default HistoryItem;
