function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
