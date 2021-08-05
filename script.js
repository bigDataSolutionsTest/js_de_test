var data = [
  {
    "Cheese": 22.2,
    "CHOCOLATE": 10.3,
    "Impulse": 1.5,
    "period": "2021_26"
  },
  {
    "Cheese": 21.8,
    "CHOCOLATE": 9.8,
    "Impulse": 1.5,
    "period": "2021_27"
  },
  {
    "Cheese": 21.2,
    "CHOCOLATE": 9.7,
    "Impulse": 1.4,
    "period": "2021_28"
  }
];

function generateGraph() {
  // calculate data total
  const dataWithTotal = data.map(entry => {
    total = 0;
    for (let key in entry) {
      if(key !== "period") {
        total += entry[key]
      }
    }
    entry.total = total/3
    return entry
  })
  
  // get labels => "Cheese", "CHOCOLATE", "Impulse", "period", "total"
  const labels = dataWithTotal.map(entry => entry.period)

  // construct an array to use as a dataset for the CHART
  const keys = Object.keys(dataWithTotal[0]);
  const graphValues = keys.reduce((graphValue, key) => {
    if(key !== "period"){
      let temp = null
      temp = {
        label: key,
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
          'rgba(75, 192, 192, 1)'
        ],
      }
      temp.data = dataWithTotal.map(entry => entry[key])
      graphValue.push(temp)
    }
    return graphValue
  }, [])
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: graphValues
    }
  });
}

generateGraph();