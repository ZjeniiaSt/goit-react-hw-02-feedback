function StatisticList({ marks, total, positive }) {
  return (
    <div>
      <ul>
        {Object.entries(marks).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
        <li>Total: {total}</li>
        <li>Positive feedback: {positive} %</li>
      </ul>
    </div>
  );
}

export default StatisticList;
