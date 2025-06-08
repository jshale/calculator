import HistoryItem from "./historyItem";

function History({ historyArr, onPasteHistory }) {
  return (
    <div>
      <h2>History</h2>
      <ul className="history-container">
        {historyArr.map((historyItem) => (
          <HistoryItem
            equation={historyItem.equation}
            result={historyItem.result}
            key={historyItem.id}
            onPasteHistory={onPasteHistory}
          />
        ))}
      </ul>
    </div>
  );
}

export default History;
