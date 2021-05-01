var heart_link = "data/heart.geojson";

var heart_data = d3.json(heart_link);

var heartpct_store = [];
var heartnbr_store = [];
var heartpop_store = [];
var heartzip_store = [];
var heartten_store = [];

heart_data.then (function (data) {
  console.log(data)
  data.features.forEach((feature) => {
    heartpct_store.push(feature.properties.PAdHrtDis2);
    heartnbr_store.push(feature.properties.NAdHrtDis);
    heartpop_store.push(feature.properties.Pop_18olde);
    heartzip_store.push(feature.properties.ZIPCODE);
  })
});
numbo = [0,1,2,3,4,5,6,7,8,9];
console.log(numbo);
Object.entries(heartpct_store).forEach(([key, value]) => console.log(`Key: ${key} and Value: ${value}`));
console.log(heartnbr_store);
console.log(heartpop_store);
console.log(heartzip_store);

console.log(numbo.length);
console.log(heartpct_store.length);
console.log(heartnbr_store.length);
console.log(heartpop_store.length);
console.log(heartzip_store.length);

// Boxplot - Heart (Percent of Heart Disease)

// var data1 = [
//   {
//     y: heartpct_store,
//     boxpoints: "all",
//     jitter: 0.3,
//     pointpos: -1.8,
//     type: "box"
//   }
// ];

// Plotly.newPlot("plot1", data1);

// Scatterplot - Heart (Diagnoses vs. Cases)

var data2 = [
  {
    x: heartpop_store,
    y: heartnbr_store,
    mode: 'markers',
    type: 'scatter',
    name: 'Zip Code',
    text: heartzip_store,
    marker: { size: 6}
  }
];

var layout = {
  xaxis: {
    range: [0, 100000]
  },
  yaxis: {
    range: [0, 2000]
  },
  title:'Heart(Diagnoses vs. Cases)'
};

Plotly.newPlot('myDiv', data2, layout);