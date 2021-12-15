import PropTypes from 'prop-types';

function Statistics({ options, total, positivePercentage }) {
  return (
    <div>
      <ul>
        {Object.entries(options).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage} %</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
