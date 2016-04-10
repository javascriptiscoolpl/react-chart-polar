# Description

This is simple Chart.js Polar Area React component.

# Quickstart

In project directory run command:

    bash install.bash

then open <code>index.html</code> file in your browser.

# Sample usage - basic

You can create <code>chart</code> object with data and send it to the <code>ChartPolar</code> React component as <code>data</code>.

    import React from 'react';
    import ReactDOM from 'react-dom';
    import ChartPolar from './react-chart-polar.js';

    var chart = { msg: [], osY: [] };
    for (var i=0; i<10; i++) {
      //chart.msg[i] = "id: "+i;
      chart.osY[i] = Math.cos(i)+Math.sin(i);
    }

    ReactDOM.render(
      <ChartPolar data={chart}/>,
      document.getElementById('app')
    );

**Note:** For this type of chart you do not have to <code>osX</code> values. So the <code>chart</code> object structure looks different here. You have <code>msg</code> and <code>osY</code> arrays instead. If you not assign <code>msg</code> values the <code>labels</code> will be empty.

# Sample usage - update

If you send updated <code>chart</code> object again to the <code>ChartPolar</code> React component as <code>data</code> it will update itself.

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

**Note:** For this type of chart you do not have to <code>osX</code> values. So the <code>chart</code> object structure looks different here. You have <code>msg</code> and <code>osY</code> arrays instead. If you not assign <code>msg</code> values the <code>labels</code> will be empty.

# License

MIT
