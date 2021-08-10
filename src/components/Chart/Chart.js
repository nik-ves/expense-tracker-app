import "./Chart.css";
import ChartBar from './ChartBar';

function Chart(props) {
  const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;