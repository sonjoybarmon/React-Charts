import { useEffect } from "react";
import Highcharts from "highcharts";

const PieCharts = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha: 45,
        },
      },
      title: {
        text: "Contents of Highsoft's weekly fruit delivery",
      },
      subtitle: {
        text: "3D donut in Highcharts",
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45,
        },
      },
      series: [
        {
          name: "Delivered amount",
          data: [
            ["Bananas", 8],
            ["Kiwi", 3],
            ["Mixed nuts", 1],
            ["Oranges", 6],
            ["Apples", 8],
            ["Pears", 4],
            ["Clementines", 4],
            ["Reddish (bag)", 1],
            ["Grapes (bunch)", 1],
          ],
        },
      ],
    });
  }, []);
  return (
    <div className="App">
      <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
          A variation of a 3D pie chart with an inner radius added. These charts
          are often referred to as donut charts.
        </p>
      </figure>
    </div>
  );
};

export default PieCharts;
