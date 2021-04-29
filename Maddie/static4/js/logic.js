
//Adding tobacco data markers 

var link = "static4/data/tobacco2.geojson";

//Grabbing our GeoJSON data..
d3.json(link).then (function (data) {
    console.log(data)
    var markers = L.markerClusterGroup(); 
  
    data.features.forEach((feature) => {
      var location = feature.geometry; 
      
      
    if (location){
      markers.addLayer(L.marker([location.coordinates[1],location.coordinates[0]])
      .bindPopup("<h3>" + feature.properties.STREET + "</h3><hr><p>" + feature.properties.CITY + ", " + feature.properties.STATE  + " " + feature.properties.ZIPCODE + "</p>")); 

    
  
//L.geoJson(data).addTo(myMap);
 //myMap.addLayer(markers)
};
    }); 
// Adding tile layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
});
console.log(streetmap)

var baseMaps = {
  "Street Map": streetmap,
  
};

var overlayMaps = {
  "Retailers": markers
}; 
  

// Creating map object
var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 11, 
  layers: [streetmap, markers]
}); 

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap)

// Load in geojson data
var geoData = "static4/data/heart.geojson";

var geojson;

// Grab data with d3
d3.json(geoData).then(function(data) {
  console.log(data)
  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "HH_Incom_2",

    // Set color scale
    scale: ["#b2b2ff", "#d9ffb2"],

    // Number of breaks in step range
    steps: 15,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Zip Code: " + feature.properties.zipcode + "<br>Median Household Income:<br>" +
        "$" + feature.properties.HH_Incom_2);
    }
  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h1>Median Income</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

})
 

})