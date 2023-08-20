import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArr);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.key}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
