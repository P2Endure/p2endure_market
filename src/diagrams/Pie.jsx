var React = require('react');
var ReactDOM = require('react-dom');
var PieChart = require('react-d3-basic').PieChart;

(function() {
  var generalChartData = require('./pieTest.json')

  var width = 400,
    height = 300,
    value = function(d) {
      return +d.Energy_Saved_Year_kWH;
    },
    name = function(d) {
      return d.Room;
    },
    
    chartSeries = [
      {
        "field": "Room 1",
        "name": "Room 1"
      },
      {
        "field": "Room 2",
        "name": "Room 2"
      },
      {
        "field": "Room 3",
        "name": "Room 3"
      },
      {
        "field": "Room 4",
        "name": "Room4"
      }
    ];

  ReactDOM.render(
    <PieChart
      data= {generalChartData}
      width= {width}
      height= {height}
      chartSeries= {chartSeries}
      value = {value}
      name = {name}
      categoricalColors = {categoricalColors}
    />
  , document.getElementById('data_pie')
  )
})()