// Bar Chart
var barChart = document.getElementById('bar-chart').getContext('2d');

var data = {
  labels: ['India', 'USA', 'Canada', 'Australia', 'UK', 'China'],
  datasets: [{
    label: 'Top Students Department',
    data: [31, 28, 26, 23, 20, 14,8 ],
    backgroundColor: [
      'rgba(54, 162, 235, 0.8)',
        'rgba(244, 197, 75, 0.8)', 
        'rgba(54, 162, 235, 0.8)',
        'rgba(244, 197, 75, 0.8)', 
        'rgba(54, 162, 235, 0.8)',
        'rgba(244, 197, 75, 0.8)', 
    ],
    // borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};


var options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

var myBarChart = new Chart(barChart, {
  type: 'horizontalBar',
  data: data,
  options: options,
});

// Pie Chart
var pieChart = document.getElementById('pie-chart').getContext('2d');

var data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [{
    label: 'My First Dataset',
    data: [12, 19, 3, 5, 2],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
  }]
};

var options = {};

var myPieChart = new Chart(pieChart, {
  type: 'pie',
  data: data,
  options: options
});


