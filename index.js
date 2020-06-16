var rawDataURL = 'https://5ee311f28b27f30016095353.mockapi.io/data/prediction';
var xField = 'Date';
var yField = 'Mean_TemperatureC';

var selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
    }, {
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
};

data1 = [
  {
    "Date": "1/1/1948",
    "Max_TemperatureC": 10,
    "Mean_TemperatureC": 8,
    "Min_TemperatureC": 7
  },
  {
    "Date": "1/2/1948",
    "Max_TemperatureC": 6,
    "Mean_TemperatureC": 4,
    "Min_TemperatureC": 3
  },
  {
    "Date": "1/3/1948",
    "Max_TemperatureC": 7,
    "Mean_TemperatureC": 4,
    "Min_TemperatureC": 2
  },
  {
    "Date": "1/4/1948",
    "Max_TemperatureC": 7,
    "Mean_TemperatureC": 4,
    "Min_TemperatureC": 2
  },
  {
    "Date": "1/5/1948",
    "Max_TemperatureC": 7,
    "Mean_TemperatureC": 3,
    "Min_TemperatureC": 0
  },
  {
    "Date": "1/6/1948",
    "Max_TemperatureC": 9,
    "Mean_TemperatureC": 7,
    "Min_TemperatureC": 5
  },
  {
    "Date": "1/7/1948",
    "Max_TemperatureC": 10,
    "Mean_TemperatureC": 7,
    "Min_TemperatureC": 4
  },
  {
    "Date": "1/8/1948",
    "Max_TemperatureC": 8,
    "Mean_TemperatureC": 5,
    "Min_TemperatureC": 2
  },
  {
    "Date": "1/9/1948",
    "Max_TemperatureC": 9,
    "Mean_TemperatureC": 4,
    "Min_TemperatureC": 1
  },
  {
    "Date": "1/10/1948",
    "Max_TemperatureC": 6,
    "Mean_TemperatureC": 4,
    "Min_TemperatureC": 2
  },
  {
    "Date": "1/11/1948",
    "Max_TemperatureC": 5,
    "Mean_TemperatureC": 3,
    "Min_TemperatureC": 1
  }
]

data2 = [
  {
    "Date": "1/12/1948",
    "Max_TemperatureC": 5,
    "Mean_TemperatureC": 1,
    "Min_TemperatureC": -2
  },
  {
    "Date": "1/13/1948",
    "Max_TemperatureC": 7,
    "Mean_TemperatureC": 3,
    "Min_TemperatureC": -1
  },
  {
    "Date": "1/14/1948",
    "Max_TemperatureC": 3,
    "Mean_TemperatureC": 0,
    "Min_TemperatureC": -3
  },
  {
    "Date": "1/15/1948",
    "Max_TemperatureC": 1,
    "Mean_TemperatureC": 1,
    "Min_TemperatureC": 0
  },
  {
    "Date": "1/16/1948",
    "Max_TemperatureC": 1,
    "Mean_TemperatureC": -1,
    "Min_TemperatureC": -2
  },
  {
    "Date": "1/17/1948",
    "Max_TemperatureC": 1,
    "Mean_TemperatureC": 0,
    "Min_TemperatureC": -1
  },
  {
    "Date": "1/18/1948",
    "Max_TemperatureC": 1,
    "Mean_TemperatureC": 0,
    "Min_TemperatureC": -1
  },
  {
    "Date": "1/19/1948",
    "Max_TemperatureC": 1,
    "Mean_TemperatureC": -1,
    "Min_TemperatureC": -2
  },
  {
    "Date": "1/20/1948",
    "Max_TemperatureC": 2,
    "Mean_TemperatureC": 1,
    "Min_TemperatureC": -1
  },
  {
    "Date": "1/21/1948",
    "Max_TemperatureC": 8,
    "Mean_TemperatureC": 4,
    "Min_TemperatureC": 1
  },
  {
    "Date": "1/22/1948",
    "Max_TemperatureC": 8,
    "Mean_TemperatureC": 7,
    "Min_TemperatureC": 5
  }
]

data3 = [
  {
    "Date": "7/4/1948",
    "Max_TemperatureC": 19,
    "Mean_TemperatureC": 14,
    "Min_TemperatureC": 11
  },
  {
    "Date": "7/5/1948",
    "Max_TemperatureC": 19,
    "Mean_TemperatureC": 15,
    "Min_TemperatureC": 11
  },
  {
    "Date": "7/6/1948",
    "Max_TemperatureC": 21,
    "Mean_TemperatureC": 16,
    "Min_TemperatureC": 11
  },
  {
    "Date": "7/7/1948",
    "Max_TemperatureC": 18,
    "Mean_TemperatureC": 14,
    "Min_TemperatureC": 11
  },
  {
    "Date": "7/8/1948",
    "Max_TemperatureC": 22,
    "Mean_TemperatureC": 16,
    "Min_TemperatureC": 10
  },
  {
    "Date": "7/9/1948",
    "Max_TemperatureC": 25,
    "Mean_TemperatureC": 18,
    "Min_TemperatureC": 11
  },
  {
    "Date": "7/10/1948",
    "Max_TemperatureC": 22,
    "Mean_TemperatureC": 18,
    "Min_TemperatureC": 14
  },
  {
    "Date": "7/11/1948",
    "Max_TemperatureC": 22,
    "Mean_TemperatureC": 17,
    "Min_TemperatureC": 13
  },
  {
    "Date": "7/12/1948",
    "Max_TemperatureC": 22,
    "Mean_TemperatureC": 17,
    "Min_TemperatureC": 11
  },
  {
    "Date": "7/13/1948",
    "Max_TemperatureC": 24,
    "Mean_TemperatureC": 18,
    "Min_TemperatureC": 11
  },
  {
    "Date": "7/14/1948",
    "Max_TemperatureC": 25,
    "Mean_TemperatureC": 18,
    "Min_TemperatureC": 12
  },
  {
    "Date": "7/15/1948",
    "Max_TemperatureC": 28,
    "Mean_TemperatureC": 20,
    "Min_TemperatureC": 12
  },
  {
    "Date": "7/16/1948",
    "Max_TemperatureC": 27,
    "Mean_TemperatureC": 20,
    "Min_TemperatureC": 14
  }
 ]

// Plotly.d3.json(rawDataURL, function(err, rawData) {
//     debugger;
//     if(err) throw err;

//     var data = prepData(rawData);
//     var layout = {
//         title: 'Time series with range slider and selectors',
//         xaxis: {
//             rangeselector: selectorOptions,
//             rangeslider: {}
//         },
//         yaxis: {
//             fixedrange: true
//         }
//     };

//     Plotly.newPlot('graph1', data, layout);
// });

// Plotly.d3.json(rawDataURL, function(err, rawData) {
//     debugger;
//     if(err) throw err;

//     var data = prepData(rawData);
//     var layout = {
//         title: 'Time series without range slider and selectors',
//         xaxis: {
//             rangeselector: selectorOptions
//         },
//         yaxis: {
//             fixedrange: true
//         }
//     };

//     Plotly.newPlot('graph2', data, layout);
// });

function prepData(rawData) {
    var x = [];
    var y = [];

    rawData.forEach(function(datum, i) {

        x.push(new Date(datum[xField]));
        y.push(datum[yField]);
    });

    return [{
        mode: 'lines',
        x: x,
        y: y
    }];
};

trace1 = prepData(data1);
trace2 = prepData(data2);
trace3 = prepData(data3);
data = [trace1[0], trace2[0], trace3[0]];
var layout = {
    title: 'Time series with range slider and selectors',
    xaxis: {
        rangeselector: selectorOptions,
        rangeslider: {}
    },
    yaxis: {
        fixedrange: true
    }
};

debugger;

Plotly.newPlot('graph', data, layout);