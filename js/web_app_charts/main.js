
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
          intersect: true
        },
        hover: {
          mode: 'point',
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
  updateChart();

};



//search auto complete

//supply userName array
const userNames = ["Athena", "Zeus", "Aphrodite","Persephone", "Apollo","Artemis", "Hermes", "Hercules", "Ares"];
//Grab element to append to
const srchBar = document.getElementById("user_search-container");
function autocomplete(srchElmnt, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    srchElmnt.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        srchBar.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                srchElmnt.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    srchElmnt.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != srchElmnt) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  autocomplete(document.getElementById("search-user"), userNames);
});



/***********************************/
/*form validation and local storage*/
/***********************************/

//Form Val//

function signup(){
  //declare vars
  const searchUser = document.getElementById("search-user").value;
  const userMsg = document.getElementById("userMsg").value;
  if (searchUser == null || searchUser == "") {
    alert("Please choose a user to send it too, we cant send it to nobody silly!");
    return false;
  }
  if (userMsg == null || userMsg == "") {
    alert("Please add a message to send to the user you selected.");
    return false;
  }

  if (userMsg && searchUser != null || userMsg && searchUser != "") {
    alert("Thank you, your message has been sent!")
  }
}


//Save Settings to local storage//
const emailPref = localStorage.getItem('email_notes');
const profVis = localStorage.getItem('prof_visibilty');
const tmznSettings = localStorage.getItem('timezone');
const emailNotes = document.getElementById("email_notes");
const prof_visibilty = document.getElementById("prof_visibilty");
const timezone = document.getElementById("timezone");

const setDataFromLocalStorage = function() {

  if (emailPref !== null) {
    emailNotes.checked = (emailPref === 'true');
  }

  if (profVis !== null) {
    prof_visibilty.checked = (profVis === 'true');
  }

  if (tmznSettings !== null) {
    timezone.val = tmznSettings;

  }
}

document.addEventListener("DOMContentLoaded", function() {



  document.getElementById("save").addEventListener("click", function() {
    localStorage.setItem('email_notes', emailNotes.checked);
    localStorage.setItem('prof_visibilty', prof_visibilty.checked);
    localStorage.setItem('timezone', timezone.selectedIndex);
    alert('Settings successfully saved!');
  });

document.getElementById("cancel").addEventListener("click", function() {
    const cancel = confirm('Are you sure you want to cancel changes?');

    if (cancel) {
      setDataFromLocalStorage();
    }
  });

  setDataFromLocalStorage();
});
