var React = require('react');
var ReactDOM = require('react-dom');
var LineZoom = require('react-d3-zoom').LineZoom;

(function() {

  var generalChartData = require('./test.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],
    x = function(d) {
      return d.index;
    };

  ReactDOM.render(
      <LineZoom
        width= {600}
        height= {400}
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        zoomX={false}
        zoomY={true}
      />
    , document.getElementById('data_zoom_line')
  )
})()