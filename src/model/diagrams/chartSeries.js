import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-basic';
import XValue from './XValue';
import PropTypes from 'prop-types';

export default class ChartSeries extends React.Component{ 

  render(){
    var chartData = require ('../data/barTest_2.json');
    var chartSeries = [
                      {
                        field: 'EnergySaving',
                        name: 'EnergySaving',
                        categoricalColors: '#A07A19',
                      }
                      ];
    var x = function(d) { return d.case; };
    var xScale = 'ordinal';
    var xLabel = "Case";
    var yLabel = 'EnergySaving';
    //var yTicks = [10, "%"];
    var width = 400;
    var height = 300;
    var title = 'Bar Chart';
return (
    <div>    
        <BarChart
            data= {chartData}
            chartSeries = {chartSeries}
            title= {title}
            width= {width}
            height= {height}
            x= {x}
            xLabel= {xLabel}
            xScale= {xScale}
            //yTicks= {yTicks}
            yLabel = {yLabel}
        />
    </div>);
    }
}

ChartSeries.propTypes = {
    chartSeries: PropTypes.string
  };