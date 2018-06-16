var lineConfig = {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      lineTension:0,
      backgroundColor: "rgba(255,100,100,.0)",
      borderColor: "rgba(255,200,200,.8)",
      borderWidth: 2,
      pointBorderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: 'white',
      data: [200, 350, 150, 500, 557, 333, 682, 1250, 809, 999, 1520, 1323],
      fill: false,
    }]
  },
  options: {
    layout: {
            padding: {
                left: 25,
                right: 25,
                top: 15,
                bottom: 15
            }
        },
    legend: {
        display: false
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true
      }]
    }
  }
};

var barConfig = {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: "rgba(255,100,100,.0)",
      borderColor: "rgba(255,200,200,.8)",
      borderWidth: 1,
      data: [200, 350, 150, 500, 557, 333, 682, 1250, 809, 999, 1520, 1323]
    }]
  },
  options: {
    layout: {
            padding: {
                left: 25,
                right: 25,
                top: 25,
                bottom: 15
            }
        },
    responsive: true,
    legend: {
      display: false
    }
  }
};
var doughutConfig = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        window.chartColors.blue,
        window.chartColors.green,
        window.chartColors.purple,

      ]
    }],
    labels: [
      'Purple',
      'Green',
      'Blue'
    ]
  },
  options: {
    layout: {
            padding: {
                left: 0,
                right: 15,
                top: 15,
                bottom: 15
            }
        },
    responsive: true,
    legend: {
      position: 'right',
      labels: {
          boxWidth: 15,
          padding: 10,

        }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};
window.onload = function() {
  var lineCtx = document.getElementById('lineChart').getContext('2d');
  const myLine = new Chart(lineCtx, lineConfig);
  var barCtx = document.getElementById('barGraph').getContext('2d');
  const myBar = new Chart(barCtx, barConfig);
  var doughnutCtx = document.getElementById('doughnut').getContext('2d');
  const myDoughnut = new Chart(doughnutCtx, doughutConfig);


};
