

//////////
// Index of Change
//////////

var change_link = "../DATA/change.geojson";

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

});