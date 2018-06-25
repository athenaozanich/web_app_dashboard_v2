
window.onload = function() {
// custom traffic data
const chartTraf = {
  'hrlylabels' : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  'hrlydata' : [4, 7, 6, 9, 12, 9, 10, 7, 10, 13, 10, 13],

  'dlylabels' : ["S", "M", "T", "W", "T", "F", "S"],
  'dlydata' : [107, 179, 143, 214, 286, 214, 250],

  'wklylabels' : ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  'wklydata' : [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],

  'mthlylabels' : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  'mthlydata' : [200, 350, 150, 500, 557, 333, 682, 1250, 809, 999, 1520, 1323]
};


// end of createLineChart


let barConfig = {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: "rgba(163,98,255, 1)",
      borderColor: "rgba(163,98,255, 1)",
      borderWidth:2,
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
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines:{
                color:"#A97548"
        },
        ticks:{
            fontColor:"#A97548"
        }
      }],
      yAxes: [{
        display: true,
        gridLines:{
                color:"#A97548"
        },
        ticks:{
            fontColor:"#009200"
        }
      }]
    }
  }
};
let doughutConfig = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        100,
        30,
        5,
      ],
      backgroundColor: [
        "rgba(163,98,255, 1)",
        "#009200",
        "#ffd700",

      ],
        borderColor: "#A97548",
    }],
    labels: [
      'Mobile',
      'Tablets',
      'Destops'
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
          fontColor:"#A97548"
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

  function updateChart(){
    for (var i = 0; i < lineNav.length; i++) {


      lineNav[i].addEventListener('click', function(event) {

        const lineNavi = this.innerHTML;
        let newLabels;
        let newData;

        /*if (lineNavi == lastChart) {
          return;
        }*/

        console.log(lastChart);
        console.log(lineNavi);
        document.querySelector('.currentChart').classList.remove('currentChart');
        this.classList.add('currentChart');



        if (lineNavi == 'Monthly') {
          newLabels = chartTraf['mthlylabels'];
          newData = chartTraf['mthlydata'];

        }else if (lineNavi == 'Hourly') {
          newLabels = chartTraf['hrlylabels'];
          newData = chartTraf['hrlydata'];

      } else if (lineNavi == 'Daily') {
          newLabels = chartTraf['dlylabels'];
          newData = chartTraf['dlydata'];

      } else if (lineNavi == 'Weekly') {
          newLabels = chartTraf['dlylabels'];
          newData = chartTraf['dlydata'];

      }
        lastChart = lineNavi;
        drawChart(newLabels,newData);
      });
    }
};


    drawChart(chartTraf['mthlylabels'], chartTraf['mthlydata']);
    document.querySelector('#lineChart__nav > li').classList.add('currentChart');

    let lastChart ='';
  function drawChart(chartLabels, chartData) {
    const lineChart = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: chartLabels,
        datasets: [{
          lineTension:0,
          backgroundColor: "rgba(163,98,255, 1)",
          borderColor: "rgba(163,98,255, 1)",
          borderWidth: 2,
          pointBorderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: 'rgba(163,98,255, 1)',
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
          intersect: true
        },
        hover: {
          mode: 'point',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines:{
                    color:"#A97548"
            },
            ticks:{
                fontColor:"#A97548"
            }
          }],
          yAxes: [{
            display: true,
            gridLines:{
                    color:"#A97548"
            },
            ticks:{
                fontColor:"#009200"
            }
          }]
        }
      }
    });
  }
  updateChart();

};
