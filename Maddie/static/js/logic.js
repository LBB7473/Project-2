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
      
      var markers = L.markerClusterGroup(); 
    
      data.features.forEach((feature) => {
        var location = feature.geometry; 
      
        
      if (location){
        markers.addLayer(L.marker([location.coordinates[1],location.coordinates[0]]));
        //.bindPopup(feature.properties.street));

      }})
    //Creating a GeoJSON layer with the retrieved data
    
  //  L.geoJson(data).addTo(myMap);
    myMap.addLayer(markers);
  });
  




