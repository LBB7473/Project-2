var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 11
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var link = "static/data/tobacco.geojson";

//Grabbing our GeoJSON data..
d3.json(link, function(data) {
    console.log(data)
    var markers = L.markerClusterGroup(); 
    for (var i = 0; i < data.length; i++ ){
      var properties = data[i].features.properties; 
    if (properties){
      markers.addLayer(L.marker([properties.coordinates[1], properties.coordinates[0]])
      .bindPopup(data[i].features.properties.STREET));

    }}
  //Creating a GeoJSON layer with the retrieved data
  myMap.addLayer(markers);
  L.geoJson(data).addTo(myMap);
});

