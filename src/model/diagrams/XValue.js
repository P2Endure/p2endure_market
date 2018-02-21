import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-d3-basic';

export default class XValue extends React.Component{ 

  render(){
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