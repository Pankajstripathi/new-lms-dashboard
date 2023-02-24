// Bar Chart
var barChart = document.getElementById('bar-chart').getContext('2d');

var data = {
  labels: ['India', 'USA', 'Canada', 'Australia', 'UK', 'China'],
  datasets: [{
    label: 'Top Students Department',
    data: [31, 28, 26, 23, 20, 14,8 ],
    backgroundColor: [
      'rgb(0, 98, 169)',
        'rgba(244, 197, 75, 0.8)', 
        'rgb(0, 98, 169)',
        'rgba(244, 197, 75, 0.8)', 
        'rgb(0, 98, 169)',
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


// progrees bar in card
let progressBar = document.querySelector('.progress-bar');
let value = 25; // Change this value to update the progress

progressBar.style.width = value + '%';
progressBar.setAttribute('aria-valuenow', value);

/// new page
// Bar chart 1
var ctx1 = document.getElementById('bar-chart-1').getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'horizontalBar',
  data: {
    labels: ['Chapter1', 'Chapter2', 'Chapter3'],
    datasets: [{
      data: [20, 20, 3],
      backgroundColor: [
         'rgb(0, 98, 169)',
        'rgb(208, 208, 208)',
           'rgb(0, 98, 169)',
        
      ],
      // borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// progress bar of learner dashboard 
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}