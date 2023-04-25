<!DOCTYPE html>
<html>
  <head>
    <title>Louisiana Demographic Map</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.js"></script>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.css" rel="stylesheet" />
    <style>
      #map {
        height: 100vh;
      }
      .legend {
        font-family: Arial, sans-serif;
        background-color: #fff;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        position: absolute;
        bottom: 30px;
        left: 30px;
        z-index: 1;
      }

      .legend h4 {
        margin-top: 0;
        font-size: 16px;
        font-weight: 600;
      }

      .legend-item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
      }

      .legend-color {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        display: inline-block;
      }

      .legend-label {
        font-size: 14px;
        display: inline-block;
      }

      #title {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: #fff;
        padding: 10px;
        font-size: 24px;
        font-weight: bold;
      }
      
  #button-container {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

    </style>
  </head>
  <body>
    <div id="map"></div>
    <div id="title">Louisiana Demographic Map</div>
    
    <div class="legend">
      <h4>Louisiana: Black and African American (Total Population)</h4>
      <div class="legend-item"><span class="legend-color" style= 'background-color:#f2f0f7;'></span><span class="legend-label">0-500 people</span></div>
      <div class="legend-item"><span class="legend-color" style= 'background-color:#cbc9e2;'></span><span class="legend-label">500+ people</span></div>
      <div class="legend-item"><span class="legend-color" style= 'background-color:#9e9ac8;'></span><span class="legend-label">2000+ people</span></div>
      <div class="legend-item"><span class="legend-color" style= 'background-color:#756bb1;'></span><span class="legend-label">3000+ people</span></div>
      <div class="legend-item"><span class="legend-color" style= 'background-color:#54278f;'></span><span class="legend-label">5000+ people</span></div>
    </div>
    
   <div id="button-container">
      <button onclick="location.href='https://ubc-geos472-spring2023.github.io/HurricaneKatrina/Louisiana_Demographic_Map/Total_Population/index.html'">Total Population</button>
      <button onclick="location.href='https://ubc-geos472-spring2023.github.io/HurricaneKatrina/Louisiana_Demographic_Map/Black_African_American.html'">Black and African American</button>
      <button onclick="location.href='https://ubc-geos472-spring2023.github.io/HurricaneKatrina/Louisiana_Demographic_Map/65_Years_over/index.html'">65 Years and over</button>
      <button onclick="location.href='https://ubc-geos472-spring2023.github.io/HurricaneKatrina/Louisiana_Demographic_Map/Income_below_poverty/index.html'">Income below poverty level</button>
    </div>

    
    <script>
      mapboxgl.accessToken = 'pk.eyJ1Ijoia2RhbnRlIiwiYSI6ImNsZXhjbjhwajAxZXg0M28yaHFjbnA1dWIifQ.vVnoYcNzAfHwi64sy_ypCQ';

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kdante/clgu79j0b001l01r6blwa99iq',
        center: [-90.0715, 29.9511],
        zoom: 8.5
      });
    </script>
  </body>
</html>