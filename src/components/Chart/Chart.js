import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointsValue = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValue);

  return (
    <div class="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={totalMax} label={label} />
      ))}
    </div>
  );
};

export default Chart;
