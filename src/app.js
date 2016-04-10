import React from 'react';
import ReactDOM from 'react-dom';
import ChartPolar from './react-chart-polar.js';

// sample usage 1
/*
var chart = { msg: [], osY: [] };
for (var i=0; i<10; i++) {
  //chart.msg[i] = "id: "+i;
  chart.osY[i] = Math.cos(i)+Math.sin(i);
}

ReactDOM.render(
  <ChartPolar data={chart}/>,
  document.getElementById('app')
);
*/

// sample usage 2
function setRandomChart() {
  var chart = { msg: [], osY: [] };
  for (var i=0; i<40; i++) {
    chart.msg[i] = "id: "+i;
    chart.osY[i] = Math.cos(i)*Math.random();
  }
  ReactDOM.render(
    <ChartPolar data={chart}/>,
    document.getElementById('app')
  );
}
setInterval(() => { setRandomChart() }, 5000);
