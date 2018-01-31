
//Food Chart
var fooddata = {
  xLabels: ["26 Jan", "27 Jan", "28 Jan","29 Jan", "30 Jan", "31 Jan", "1 Feb"],
  datasets: [{
    data: [0,40,20,25,20,40,0],
    fill: false,
    pointRadius: 0,
    pointHitRadius: 20,
    hoverRadius: 20,
    borderColor: window.chartColors.lightblue,
    backgroundColor: window.chartColors.lightblue,
  }]
};

//Water Chart
var waterdata = {
  xLabels: ["26 Jan", "27 Jan", "28 Jan","29 Jan", "30 Jan", "31 Jan", "1 Feb"],
  datasets: [{
    data: [0,40,50,40,70,60,70],
    fill: false,
    pointRadius: 0,
    pointHitRadius: 20,
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
scaleStartValue: 0,
    legend: {
      display: false,
    },
    responsive: true,
    title:{
        display:false
    },
    tooltips: {
      mode: 'index',
      position: 'nearest',
      intersect: true,
      yPadding: 15,
      xPadding: 15,
      caretSize: 0,
      caretPadding: 15,
      cornerRadius: 5,
      displayColors: false,
      backgroundColor: window.chartColors.lightblue,
      titleFontColor: window.chartColors.white,
      bodyFontColor: window.chartColors.white,
      bodyFontSize: 16,
      bodyFontFamily: 'sofia-pro',
      yAlign: 'bottom',
      callbacks: {

                   label: function (tooltipItems, data) {
                      return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '';
                   },
                   title: function (tooltipItems, data) {
                      return '';
                   }
              }
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
            xAxes: [{
            stacked: true,
            gridLines: {
              drawBorder: false,
            },
            display: true,

            ticks: {
              offset: 25,
              distance: 40,
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90,
              fontFamily: "sofia-pro",
              fontSize: 12,
              beginAtZero:true,
            },
              scaleLabel: {
                display: false,
            }
        }],

        yAxes: [{
            display: false,
            ticks: {
              scaleOverride : true,
              scaleSteps : 10,
              scaleStepWidth : 50,
              scaleStartValue : 0,
              max: 100,
            },
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
      position: 'nearest',
      intersect: true,
      yPadding: 15,
      xPadding: 15,
      caretSize: 0,
      caretPadding: 10,
      cornerRadius: 5,
      displayColors: false,
      backgroundColor: window.chartColors.lightblue,
      titleFontColor: window.chartColors.white,
      bodyFontColor: window.chartColors.white,
      bodyFontSize: 16,
      bodyFontFamily: 'sofia-pro',
      yAlign: 'bottom',
      callbacks: {

                   label: function (tooltipItems, data) {
                      return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '';
                   },
                   title: function (tooltipItems, data) {
                      return '';
                   }
              }
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
            xAxes: [{
            stacked: true,
            gridLines: {
              drawBorder: false
            },
            display: true,

            ticks: {
              offset: 25,
              distance: 40,
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90,
              fontFamily: "sofia-pro",
              fontSize: 12,
              beginAtZero:true
            },
              scaleLabel: {
                display: false,
            }
        }],

        yAxes: [{
            display: false,
            ticks: {
              scaleOverride : true,
              scaleSteps : 10,
              scaleStepWidth : 50,
              scaleStartValue : 0,
              max: 100,
            },
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
  /*animation: {
      duration: 1,
      function() {
        var controller = this.chart.controller;
        var chart = controller.chart;
        var xAxis = controller.scales['x-axis-0'];

        var numTicks = xAxis.ticks.length;
        var yOffsetStart = xAxis.width / numTicks;
        var halfBarWidth = (xAxis.width / (numTicks * 2));

        xAxis.ticks.forEach(function(value, index) {
            var xOffset = chart.height - 50;
            var yOffset = (yOffsetStart * index) + halfBarWidth;


            ctxWater.fillText(value, yOffset, xOffset);
        });
      }
    }*/
  }
});
};
