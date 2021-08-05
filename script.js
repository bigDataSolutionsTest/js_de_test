//this is json format and containt X-axis value given period for eash
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

function data_preprcessing()
{
  var dataWithTotal = [];
  //looping over our data
  for (var i = 0; i < data.length; i++) {
    var temp = data[i];
    total = 0;
    for (var key in data[i]) {
      if(key !== "period") {
        total += data[i][key];
      }
    }
    temp.total = total / 3;
    dataWithTotal.push(temp);
  }
   //extracting periods for x-axes
  var periods = [];
  
  for (var i = 0; i < dataWithTotal.length; i++) {
    periods.push(dataWithTotal[i]['period']);
  }
    
  return {periods , dataWithTotal};
}


function generateGraph(graph_data) {
  var graphValues = [];
  // keys contain the names i mean strings such as cholcate ...
  var labels = Object.keys(graph_data.dataWithTotal[0]);
  
  // preparing background colors and labels of the chart 
  for (var i = 0; i < labels.length; i++) {
    if(labels[i] !== "period") {
      var temp = {
        label: labels[i], 
        data: [],
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
      };
  
      for (var n = 0; n < graph_data.dataWithTotal.length; n++) {
        temp.data.push(graph_data.dataWithTotal[n][labels[i]])
      }
      
      graphValues.push(temp);
    }
  }
  

  //drawing lines
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: graph_data.periods,
      datasets: graphValues
    }
  });
  //end drawing lines
}
let graph_data = data_preprcessing();
generateGraph(graph_data);