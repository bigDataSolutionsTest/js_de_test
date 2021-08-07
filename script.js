var data = [
  {
    Cheese: 22.2,
    CHOCOLATE: 10.3,
    Impulse: 1.5,
    period: '2021_26',
  },
  {
    Cheese: 21.8,
    CHOCOLATE: 9.8,
    Impulse: 1.5,
    period: '2021_27',
  },
  {
    Cheese: 21.2,
    CHOCOLATE: 9.7,
    Impulse: 1.4,
    period: '2021_28',
  },
]

function generateGraph() {
  const dataWithTotal = data.map(d => {
    const total = Object.values(d)
      .filter(v => !isNaN(v))
      .reduce((sum, value) => sum + value, 0)
    return { ...d, total: +(total / 3).toFixed(1) }
  })

  const datasets = Object.keys(dataWithTotal[0])
    .filter(key => key !== 'period')
    .map(key => ({
      label: key,
      data: dataWithTotal.map(d => ({
        period: d.period,
        value: d[key],
      })),
    }))

  const labels = dataWithTotal.map(({ period }) => period)

  const ctx = document.getElementById('myChart').getContext('2d')
  const myChart = new Chart(ctx, {
    type: 'line',
    options: {
      parsing: {
        xAxisKey: 'period',
        yAxisKey: 'value',
      },
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
    },
    data: {
      labels,
      datasets,
    },
  })
}

generateGraph()
