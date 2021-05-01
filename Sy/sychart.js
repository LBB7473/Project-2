//////////
// Heart Disease Diagnoses
//////////

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

  // Scatterplot - Heart (Diagnoses x Population)
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
      range: [1000, 80000],
      title: {
        text: "Population"
      }
    },
    yaxis: {
      range: [100, 4000],
      title: {
        text: "Number of Diagnoses"
      }
    },
    title:'Heart - Population x Diagnoses'
  };

  Plotly.newPlot('plot2', data2, layout2);
});

//////////
// Index of Change
//////////

var change_link = "data/change.geojson";

var change_data = d3.json(change_link);

// IRS_Ratio, HH_Size, Per_White, Per_Colleg, Rent, HHChangAdj
// Interesting comparisons?: All adjusted for inflation
  // Rent against HHChangAdj - Scatter
  // IRS_Ratio against HH_Size - Scatter
  // Per_White against Per_College - Scatter (Opt boxplot for just Per_College)

var changeirs_store = [];
var changesiz_store = [];
var changewht_store = [];
var changecol_store = [];
var changernt_store = [];
var changeinc_store = [];
var changegen_store = [];
var changezip_store = [];

change_data.then (function (data) {
  console.log(data)
  data.features.forEach((feature) => {
    changeirs_store.push(feature.properties.IRS_Ratio);
    changesiz_store.push(feature.properties.HH_Size);
    changewht_store.push(feature.properties.Per_White);
    changecol_store.push(feature.properties.Per_Colleg);
    changernt_store.push(feature.properties.Rent);
    changeinc_store.push(feature.properties.HHChangAdj);
    changegen_store.push(feature.properties.Index_Scor);
    changezip_store.push(feature.properties.zipcode);
  })
  // Scatterplot - Change (Rent x Median Income)
      // Points of note: 90014(44.36668, 108.064)
      // Median rent seems to have increased disregarding increase or decrease in median income

  var data3 = [
    {
      x: changeinc_store,
      y: changernt_store,
      mode: 'markers',
      type: 'scatter',
      name: 'Zip Code',
      text: changezip_store,
      marker: {size: 8}
    }
  ];
  
  var layout3 = {
    xaxis: {
      range: [-50, 80],
      title: {
        text: '%Change Median Household Income'
      }
    },
    yaxis: {
      range: [-50, 125],
      title: {
        text: '%Change Median Gross Rent'
      }
    },
    title:'Index of Change - Rent x Median Income'
  };

  Plotly.newPlot('plot3', data3, layout3);

  // Scatterplot - Change (Median Household x IRS Ratio)
    // There are very few points in quadrant 4, signifying few 
    // zip codes that saw a decrease in household size that that had
    // and increase in filer ratio.

  var data4 = [
    {
      x: changeirs_store,
      y: changesiz_store,
      mode: 'markers',
      type: 'scatter',
      name: 'Zip Code',
      text: changezip_store,
      marker: {size: 8}
    }
  ];
  
  var layout4 = {
    xaxis: {
      range: [-75, 75],
      title: {
        text: '%Change IRS Filer Ratio'
      }
    },
    yaxis: {
      range: [-25, 25],
      title: {
        text: '%Change Median Household Size'
      }
    },
    title:'Index of Change - Median Household x IRS Ratio'
  };

  Plotly.newPlot('plot4', data4, layout4);

  // Scatterplot - Change (White Residents x Bachelor's Degrees)
    // Points of note: 90014(26.815, 29.511)

  var data5 = [
    {
      x: changewht_store,
      y: changecol_store,
      mode: 'markers',
      type: 'scatter',
      name: 'Zip Code',
      text: changezip_store,
      marker: {size: 8}
    }
  ];
  
  var layout5 = {
    xaxis: {
      range: [-20, 30],
      title: {
        text: '%Change White Non Hispanic Residents'
      }
    },
    yaxis: {
      range: [-10, 31],
      title: {
        text: '%Change Bachelors Degrees Residents >= 25YO'
      }
    },
    title:'Index of Change - White Residents x Bachelors Degrees'
  };

  Plotly.newPlot('plot5', data5, layout5);

  // Box - Change (Index Score)
    // Outlier at 90014(0.814)
  var data6 = [
    {
      y: changegen_store,
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
      type: "box",
      name: "Index Score(0-1)",
      text: changezip_store,
      marker: {size: 6},
    }
  ];
  
  var layout6 = {
    xaxis: {
      range: [-0.6, 0.5]
    },
    yaxis: {
      range: [0, 1],
    },  
    title:'Index of Change - Measure of Gentrification',
    boxgap: 0.5
  };
  
  Plotly.newPlot("plot6", data6, layout6);

});