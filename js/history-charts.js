
//Food Chart

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config = {
type: 'line',
data: {
xLabels: ["January", "February", "March", "April", "May", "June", "July", "August"],
yLabels: ['', 'Request Added', 'Request Viewed', 'Request Accepted', 'Request Solved', 'Solving Confirmed'],
datasets: [{
label: "My First dataset",
data: ['', 'Request Added', 'Request Added', 'Request Added', 'Request Viewed', 'Request Viewed', 'Request Viewed','Request Added'],
fill: false,
pointRadius: 5,
borderColor: window.chartColors.lightblue,
backgroundColor: window.chartColors.lightblue,
}]
},
options: {
legend: {
display: false
},
responsive: true,
title:{
display:false,
text:'Chart with Non Numeric Y Axis'
},
scales: {
xAxes: [{
ticks: {
      autoSkip: false,
      maxRotation: 90,
      minRotation: 90,
      fontFamily: "sofia-pro",
      fontSize: 16
    },
display: true,
scaleLabel: {
display: false,
labelString: 'Month'
}
}],
yAxes: [{
type: 'category',
position: 'left',
display: false,
scaleLabel: {
display: true,
labelString: 'Request State'
},
ticks: {
reverse: true,

}
}]
}
}
};

window.onload = function() {
var ctx = document.getElementById("foodChart").getContext("2d");
ctx.canvas.height = 200;
window.myLine = new Chart(ctx, config);
};



//Water Chart
var testconfig = {
  type: 'line',
  data: {
    xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [{
      data: [15,20,18,15,18,40,45,45,80,95,80,40],
      fill: false,
      pointRadius: 5,
      borderColor: window.chartColors.lightblue,
      backgroundColor: window.chartColors.lightblue,
    }]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    title:{
        display:false
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
            gridLines: {
              drawBorder: false
            },
            display: true,
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90,
              fontFamily: "sofia-pro",
              fontSize: 16,
              display: false
            },
            scaleLabel: {
                display: false
            }
        }],
        yAxes: [{
            display: false
        }]
    },
    layout: {
        padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        }
    }
  }
}


var configWater = {
type: 'line',
data: {
xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
yLabels: ['', 'Request Added', 'Request Viewed', 'Request Accepted', 'Request Solved', 'Solving Confirmed'],
datasets: [{
label: "My First dataset",
data: ['Request Solved', 'Request Added', 'Request Added', 'Request Added', 'Request Viewed', 'Request Viewed', 'Request Viewed','Request Added'],
fill: false,
pointRadius: 5,
borderColor: window.chartColors.lightblue,
backgroundColor: window.chartColors.lightblue,
}]
},
options: {
legend: {
display: false
},
responsive: true,
title:{
display:false,
text:'Chart with Non Numeric Y Axis'
},
scales: {
  xAxes: [{
    ticks: {
      autoSkip: false,
      maxRotation: 90,
      minRotation: 90,
      fontFamily: "sofia-pro",
      fontSize: 16
    },
    display: true,
    scaleLabel: {
      display: false,
      labelString: 'Month'
    }
  }],
  yAxes: [{
    type: 'category',
    position: 'left',
    display: false,
    scaleLabel: {
      display: true,
      labelString: 'Request State'
    },
    ticks: {
      reverse: false,
    }
}]
}
}
};

window.onload = function() {
var ctx = document.getElementById("waterChart").getContext("2d");
ctx.canvas.height = 300;
window.myLine = new Chart(ctx, testconfig);
};
