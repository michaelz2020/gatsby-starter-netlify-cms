export const setUSCasesOptions = data => {
  const options = {
    chart: {
      type: "line"
    },
    title: {
      text: "Total Confirmed Cases in US"
    },
    xAxis: {
      categories: data.map(data => Number(data.node.Date))
    },
    yAxis: [
      {
        title: {
          text: "New Cases"
        },
        opposite: true
      }
    ],
    series: [
      {
        name: "New US Cases",
        data: data.map(data => Number(data.node.USNewCases)),
        yAxis: 0
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal"
            },
            yAxis: {
              labels: {
                align: "left",
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }
      ]
    }
  }
  return options
}
