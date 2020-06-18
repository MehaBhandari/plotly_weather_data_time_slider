var rawDataURL = 'https://5ee311f28b27f30016095353.mockapi.io/data/prediction';
var xField = 'Date';
var yField = 'Amount';

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

data = [
  {
    "Date": "1/31/2019",
    "Bank": "Bank of America",
    "Amount": 80405.84,
    "Predicted Amount LR": 80405.84,
    "Predicted Amount MVLR": 80405.84,
    "Predicted Amount NN": 80405.84,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "2/28/2019",
    "Bank": "Bank of America",
    "Amount": 88655.76,
    "Predicted Amount LR": 88655.76,
    "Predicted Amount MVLR": 88655.76,
    "Predicted Amount NN": 88655.76,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "4/30/2019",
    "Bank": "Bank of America",
    "Amount": 87070.36,
    "Predicted Amount LR": 87070.36,
    "Predicted Amount MVLR": 87070.36,
    "Predicted Amount NN": 87070.36,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "5/31/2019",
    "Bank": "Bank of America",
    "Amount": 92685.28,
    "Predicted Amount LR": 92685.28,
    "Predicted Amount MVLR": 92685.28,
    "Predicted Amount NN": 92685.28,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "6/30/2019",
    "Bank": "Bank of America",
    "Amount": 96670.37,
    "Predicted Amount LR": 96670.37,
    "Predicted Amount MVLR": 96670.37,
    "Predicted Amount NN": 96670.37,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "7/31/2019",
    "Bank": "Bank of America",
    "Amount": 88655.76,
    "Predicted Amount LR": 88655.76,
    "Predicted Amount MVLR": 88655.76,
    "Predicted Amount NN": 88655.76,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "8/31/2019",
    "Bank": "Bank of America",
    "Amount": 81442.62,
    "Predicted Amount LR": 81442.62,
    "Predicted Amount MVLR": 81442.62,
    "Predicted Amount NN": 81442.62,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "9/30/2019",
    "Bank": "Bank of America",
    "Amount": 101804.83,
    "Predicted Amount LR": 101804.83,
    "Predicted Amount MVLR": 101804.83,
    "Predicted Amount NN": 101804.83,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "10/31/2019",
    "Bank": "Bank of America",
    "Amount": 94305.03,
    "Predicted Amount LR": 94305.03,
    "Predicted Amount MVLR": 94305.03,
    "Predicted Amount NN": 94305.03,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "11/30/2019",
    "Bank": "Bank of America",
    "Amount": 87070.36,
    "Predicted Amount LR": 87070.36,
    "Predicted Amount MVLR": 87070.36,
    "Predicted Amount NN": 87070.36,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "12/31/2019",
    "Bank": "Bank of America",
    "Amount": 91876.81,
    "Predicted Amount LR": 91876.81,
    "Predicted Amount MVLR": 91876.81,
    "Predicted Amount NN": 91876.81,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "1/31/2020",
    "Bank": "Bank of America",
    "Amount": 99126.12,
    "Predicted Amount LR": 100825.7905,
    "Predicted Amount MVLR": 82328.63149,
    "Predicted Amount NN": 88921.89593,
    "snMSE LR": 0.014530305,
    "snMSE MVLR": 0.021127276,
    "snMSE NN": 0.008660095
  },
  {
    "Date": "2/29/2020",
    "Bank": "Bank of America",
    "Amount": 96670.37,
    "Predicted Amount LR": 103636.899,
    "Predicted Amount MVLR": 82723.11151,
    "Predicted Amount NN": 86163.44406,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  },
  {
    "Date": "3/31/2020",
    "Bank": "Bank of America",
    "Amount": 87070.36,
    "Predicted Amount LR": 106448.0075,
    "Predicted Amount MVLR": 82706.81369,
    "Predicted Amount NN": 86163.44406,
    "snMSE LR": null,
    "snMSE MVLR": null,
    "snMSE NN": null
  }
 ]
 
console.log("data1 length: " + data.length)
data1 = data.slice(0,11);
data2 = data.slice(10);
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

yField1 = 'Predicted Amount LR';
function prepData1(rawData) {
  var x = [];
  var y = [];
  
  rawData.forEach(function(datum, i) {
    x.push(new Date(datum[xField]));
    y.push(datum[yField1]);
  });

  return [{
    mode: 'lines',
    x: x,
    y: y
  }];
};

yField2 = 'Predicted Amount MVLR';
function prepData2(rawData) {
  var x = [];
  var y = [];
  
  rawData.forEach(function(datum, i) {
    x.push(new Date(datum[xField]));
    y.push(datum[yField2]);
  });

  return [{
    mode: 'lines',
    x: x,
    y: y
  }];
};

yField3 = 'Predicted Amount NN';
function prepData3(rawData) {
  var x = [];
  var y = [];
  
  rawData.forEach(function(datum, i) {
    x.push(new Date(datum[xField]));
    y.push(datum[yField3]);
  });

  return [{
    mode: 'lines',
    x: x,
    y: y
  }];
};

trace1 = prepData(data1);
trace2 = prepData(data2);
trace3 = prepData1(data2);
trace4 = prepData2(data2);
trace5 = prepData3(data2);

// trace3 = prepData(data3);
data = [trace1[0],trace2[0],trace3[0],trace4[0],trace5[0]];
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