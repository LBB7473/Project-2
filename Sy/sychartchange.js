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
        changezip_store.push(feature.properties.zipcode);
    })
    // Scatterplot - Change (Rent against Median Income)
        // Points of note: 90014(44.36668, 108.064)
        // Median rent seems to have increased disregarding increase or decrease in median income

    var data1 = [
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
    
    var layout1 = {
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
        title:'Index of Change - Rent against Median Income'
    };

    Plotly.newPlot('plot1', data1, layout1);

    // Scatterplot - Change (Median Household against IRS Ratio)
        // There are very few points in quadrant 4, signifying few 
        // zip codes that saw a decrease in household size that that had
        // and increase in filer ratio.

    var data2 = [
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
    
    var layout2 = {
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
        title:'Index of Change - Median Household against IRS Ratio'
    };

    Plotly.newPlot('plot2', data2, layout2);

    // Scatterplot - Change (White Residents against Bachelor's Degrees)
        // Points of note: 90014(26.815, 29.511)

    var data3 = [
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
    
    var layout3 = {
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
        title:'Index of Change - White Residents against Bachelors Degrees'
    };

    Plotly.newPlot('plot3', data3, layout3);

    // Box - Change (Bachelor's Degrees)
        // Outlier at 29.511, ZIPCODE 90014
    var data3alt = [
        {
            y: changecol_store,
            boxpoints: "all",
            jitter: 0.3,
            pointpos: -1.8,
            type: "box",
            name: "%Change Bachelors Degrees Residents >= 25YO",
            text: changezip_store,
            marker: {size: 6},
        }
    ];
    
    var layout3alt = {
        xaxis: {
            range: [-0.6, 0.5]
        },
        yaxis: {
            range: [-5, 31],
        },  
        title:'Index of Change - Bachelors Degrees',
        boxgap: 0.5
        };
    
    Plotly.newPlot("plot3alt", data3alt, layout3alt);

});