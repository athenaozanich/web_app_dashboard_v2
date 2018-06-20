
window.onload = function() {
// custom traffic data
const hrlyTraf = {
  'labels' : [
              "0", "1", "2", "3", "4", "5",
              "6", "7", "8", "9", "10", "11",
            ],
  'data' : [
              4, 7, 6, 9, 12, 9,
              10, 7, 10, 13, 10, 13,
            ]
};

const dailyTraf = {
  'labels' : [
              "S", "M", "T", "W", "T", "F", "S"
            ],
  'data' : [
              107, 179, 143, 214, 286, 214, 250,
            ]
};

const wklyTraf = {
  'labels' : [
              "16-22", "23-29", "30-5", "6-12", "13-19",
              "20-26", "27-3", "4-10", "11-17", "18-24",
              "25-31"
            ],
  'data' : [
              750, 1250, 1000, 1500, 2000, 1500,
              1750, 1250, 1750, 2250, 1750, 2250
            ]
};

const mthlyTraf = {
  'labels' : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  'data' : [200, 350, 150, 500, 557, 333, 682, 1250, 809, 999, 1520, 1323]
};


// end of createLineChart


let barConfig = {
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
let doughutConfig = {
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


  let lineCtx = document.getElementById('lineChart').getContext('2d');

  let barCtx = document.getElementById('barGraph').getContext('2d');
  const myBar = new Chart(barCtx, barConfig);
  let doughnutCtx = document.getElementById('doughnut').getContext('2d');
  const myDoughnut = new Chart(doughnutCtx, doughutConfig);

  let lineNav = document.querySelectorAll('#lineChart__nav li');
  let lastChart = '';
  for (let i = 0; i < lineNav.length; i += 1) {
    lineNav[i].addEventListener('click', function(event) {
      //lastChart.classList.remove('currentChart');
      let newLabels = mthlyTraf['labels'];
      let newData = mthlyTraf['data'];
      let lineNavi = this.innerHTML;

      this.classList.add('currentChart');

      if (lineNavi === 'Monthly') {
        newLabels = mthlyTraf['labels'];
        newData = mthlyTraf['data'];
      }else if (lineNavi === 'Hourly') {
        newLabels = hrlyTraf['labels'];
        newData = hrlyTraf['data'];

    } else if (lineNavi === 'Daily') {
        newLabels = dailyTraf['labels'];
        newData = dailyTraf['data'];

    } else if (lineNavi === 'Weekly') {
        newLabels = wklyTraf['labels'];
        newData = wklyTraf['data'];

    }
      drawChart(newLabels,newData);
    });
  }
  drawChart(mthlyTraf['labels'],mthlyTraf['data']);
  lineNav[1].classList.add('currentChart');
function drawChart(chartLabels, chartData) {
  const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [{
        lineTension:0,
        backgroundColor: "rgba(255,100,100,.0)",
        borderColor: "rgba(255,200,200,.8)",
        borderWidth: 2,
        pointBorderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'white',
        data: chartData,
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
  });
}


};
