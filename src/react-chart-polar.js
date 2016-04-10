import React from 'react';
import ReactDOM from 'react-dom';

export default class ChartPolar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chr: "init" };
  }

  render() {
    return (
      <div className="ChartPolar">
        <canvas id="canvas"></canvas>
      </div>
    );
  }

  componentDidMount() {
    var ChartData = [];
    var items = this.props.data.osY.length;
    for (var i=0; i<items; i++) {
        var color = Math.round( i*(360/items) );
        ChartData[i] = {};
        ChartData[i].value = this.props.data.osY[i];
        ChartData[i].color = "hsl("+color+",100%,50%)";
        ChartData[i].highlight = "#E1E1E1";
        ChartData[i].label = this.props.data.msg[i] || "";
    }
    var GlobalOptions = {
      responsive: true,
      animationEasing: "easeOutBounce",
      animationSteps : 30,
      scaleShowGridLines : true,
      scaleGridLineColor : "#E1E1E1",
      scaleBeginAtZero: false
    };
    var nde = ReactDOM.findDOMNode(this);
    var ctx = nde.getElementsByTagName("canvas")[0].getContext('2d');
    this.state.chr = new Chart(ctx).PolarArea(ChartData, GlobalOptions);
  }

  componentDidUpdate() {
    for (var i=0; i<this.props.data.osY.length; i++) {
      this.state.chr.segments[i].value = this.props.data.osY[i];
    }
    this.state.chr.update();
  }
}
