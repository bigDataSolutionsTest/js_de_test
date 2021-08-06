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
  const dataWithTotal = data.map(temp => {
    const sum = Object.values(temp)
      .filter(element => !isNaN(element))
      .reduce((total, value) => total + value, 0)

    temp.total = (sum / 3).toFixed(1)

    return temp
  })

  const labels = dataWithTotal.map(({ period }) => period)

  const keys = Object.keys(dataWithTotal[0]).filter(key => key !== 'period')
  const graphValues = keys.map(label => {
    return {
      label,
      data: dataWithTotal.map(d => d[label]),
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
    }
  })

  const ctx = document.getElementById('myChart').getContext('2d')
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: graphValues,
    },
  })
}

generateGraph()
