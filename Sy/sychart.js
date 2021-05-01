var heart_link = "data/heart.geojson";

var heart_data = d3.json(heart_link);

var heartpct_store = [];
var heartnbr_store = [];
var heartpop_store = [];
var heartzip_store = [];

heart_data.then (function (data) {
  console.log(data)
  data.features.forEach((feature) => {
    heartpct_store.push(feature.properties.PAdHrtDis2);
    heartnbr_store.push(feature.properties.NAdHrtDis);
    heartpop_store.push(feature.properties.Pop_18olde);
    heartzip_store.push(feature.properties.ZIPCODE);
  })
  
  // Boxplot - Heart Disease (Distribution)
    // Points of note: 90272(9.5), 90210(8.9), 90732(8.8)

  var data1 = [
    {
      y: heartpct_store,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      type: "box",
      name: "%Adult Respondents Diagnosed",
      text: heartzip_store,
      marker: {size: 6}
    }
  ];

  var layout1 = {
    xaxis: {
      range: [-0.4, 0.4]
    },
    yaxis: {
        range: [1, 11],
        zeroline: false
    },  
    title:'Heart Disease - Distribution',
    boxgap: 0.5
  };

  Plotly.newPlot("plot1", data1, layout1);

  // Scatterplot - Heart (Diagnoses vs. Cases)
    // Points of note: 90275(37K, 3182)

  var data2 = [
    {
      x: heartpop_store,
      y: heartnbr_store,
      mode: 'markers',
      type: 'scatter',
      name: 'Zip Code',
      text: heartzip_store,
      marker: {size: 8}
    }
  ];

  var layout2 = {
    xaxis: {
      range: [1000, 100000]
    },
    yaxis: {
      range: [100, 4000]
    },
    title:'Heart - Diagnoses vs. Cases'
  };

  Plotly.newPlot('plot2', data2, layout2);
});