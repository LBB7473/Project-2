function createMap (la_index) {

// Adding tile layer for the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

 // Create a baseMaps object to hold the lightmap layer
var baseMaps = {
    "Light Map": lightmap
  };

var overlayMaps = {
    "La Index": la_index
  };

  var myMap = L.map("map", {
    center: [34.0522, -118.2437],
    zoom: 11
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

// Load in geojson data
var geoData = "static2/data/Los_Angeles_Index_of_Neighborhood_Change.geojson";

var geojson;


  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "Rent",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

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
      layer.bindPopup("Zip Code: " + feature.properties.ZIP + "<br>Median Household Income:<br>" +
        "$" + feature.properties.Rent);
    }
  }).addTo(myMap);

}
    // Grab data with d3
    d3.json(geoData).then(createMap)

function createMarkers(data){
    
        var link = "static/data/tobacco.geojson"
        var markers = L.markerClusterGroup(); 
      
        data.features.forEach((feature) => {
          var location = feature.geometry; 
        
          
        if (location){
          markers.addLayer(L.marker([location.coordinates[1],location.coordinates[0]]));
                                                                                        }; 
                                            }
                                    
        ,createMap(L.layerGroup(la_index)) ,
                                          
d3.json(link).then(createMarkers)
        )}; 