
const graphJson = {
  labels: [
    "12AM-01AM",
    "01AM-02AM",
    "02AM-03AM",
    "03AM-04AM",
    "04AM-05AM",
    "05AM-06AM",
    "06AM-07AM",
    "08AM-09AM",
  ],
  series: [
    {
      name: "Discharges By Intervals",
      type: "line",
      data: [0, 200, 400, 1000, 2000, 3000, 2000, 100], // In seconds
    },
    {
      name: "Avg Time",
      type: "bar",
      data: [0, 200, 400, 1000, 3300, 4200, 2000, 100], // In seconds
    },
  ],
};

// Function to format seconds to hh:mm
function formatSecondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

// Mixed chart
const mixedChart = new ApexCharts(document.querySelector("#mixedChart"), {
  chart: {
    type: "line", // Default type
  },
  xaxis: {
    categories: graphJson.labels,
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return formatSecondsToTime(value);
      },
    },
  },
  series: graphJson.series,
  responsive: [
    {
      breakpoint: 768, // Define the breakpoint where the chart options change
      options: {
        chart: {
          type: "bar", // Change chart type for smaller screens
        },
      },
    },
  ],
});

mixedChart.render();