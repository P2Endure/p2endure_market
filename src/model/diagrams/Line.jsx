var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require('react-d3-basic').LineChart;


export default class Line extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chartData: require('../data/lineTest.json'),
                  chartSeries: [
                    {
                      field: 'Room 1',
                      name: 'Room 1',
                      color: 'black',
                      style: {
                        "strokeWidth": 5,
                        "strokeOpacity": .2,
                        "fillOpacity": .2,
                      }
                    }
                  ],
                x: function(d) { return d.index; }};
  }
 
    render() {
      return (
      <div className="panel">
       <div className="panel-inlay">
        <h3>&#10066; Energy Costs</h3>
       </div>    
        <LineChart
          legend ={true}
          width= {400}
          height= {300}
          data= {this.state.chartData}
          chartSeries= {this.state.chartSeries}
          x= {this.state.x}  
        />
      </div> 
      );
    }
}
