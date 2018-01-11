var React = require('react');
var ReactDOM = require('react-dom');
var PieChart = require('react-d3-basic').PieChart;

export default class Donut extends React.Component {

constructor(props) {
    super(props);
    this.state = { generalChartData: require('../data/pieTest.json'),
                   chartSeries : [
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
                      "name": "Room 4"
                    }
                  ],
            value: function(d){return +d.Energy_Saved_Year_kWH; },
            name: function(d){return d.Room; },
            width: 300,
            height: 300, 
            innerRadius: 10,     
                };
}
render(){
  return (
    <PieChart
      data= {this.state.generalChartData}
      width= {400}
      height= {300}
      chartSeries= {this.state.chartSeries}
      value = {this.state.value}
      name = {this.state.name}
      innerRadius = {this.state.innerRadius}
      />);
  } 
}