
//Food Chart

var fooddata = {
  xLabels: ["26 Jan", "27 Jan", "28 Jan","29 Jan", "30 Jan", "31 Jan", "1 Feb"],
  datasets: [{
    data: [15,20,18,15,18,40,0],
    fill: false,
    pointRadius: 5,
    borderColor: window.chartColors.lightblue,
    backgroundColor: window.chartColors.lightblue,
  }]
};

//Water Chart
var waterdata = {
  xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  datasets: [{
    data: [15,20,18,15,18,40,45,45,80,95,80,40],
    fill: false,
    pointRadius: 5,
    borderColor: window.chartColors.lightblue,
    backgroundColor: window.chartColors.lightblue,
  }]
};

// on window load
window.onload = function() {

// creating food chart
var ctxFood = document.getElementById("foodChart").getContext("2d");
ctxFood.canvas.height = 300;
window.myLineFood = new Chart(ctxFood, {
  type: 'line',
  data: fooddata,
  options : {
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
    },
    animation: {
      duration: 1,
      onComplete: function() {
        var controller = this.chart.controller;
        var chart = controller.chart;
        var xAxis = controller.scales['x-axis-0'];

        var numTicks = xAxis.ticks.length;
        var yOffsetStart = xAxis.width / numTicks;
        var halfBarWidth = (xAxis.width / (numTicks * 2));

        xAxis.ticks.forEach(function(value, index) {
            var xOffset = chart.height - 20;
            var yOffset = (yOffsetStart * index) + halfBarWidth;
            ctxFood.fillText(value, yOffset, xOffset);
        });
      }
    }
  }
});

// creating water chart
var ctxWater = document.getElementById("waterChart").getContext("2d");
ctxWater.canvas.height = 300;
window.myLineWater = new Chart(ctxWater, {
  type: 'line',
  data: waterdata,
  options : {
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
    },
    animation: {
      duration: 1,
      onComplete: function() {
        var controller = this.chart.controller;
        var chart = controller.chart;
        var xAxis = controller.scales['x-axis-0'];

        var numTicks = xAxis.ticks.length;
        var yOffsetStart = xAxis.width / numTicks;
        var halfBarWidth = (xAxis.width / (numTicks * 2));

        xAxis.ticks.forEach(function(value, index) {
            var xOffset = chart.height - 20;
            var yOffset = (yOffsetStart * index) + halfBarWidth;
            ctxWater.fillText(value, yOffset, xOffset);
        });
      }
    }
  }
});
};
