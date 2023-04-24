      <button onclick="location.href='https://ubc-geos472-spring2023.github.io/HurricaneKatrina/Louisiana_Demographic_Map/Black_African_American'">Black and African American</button>
      <button onclick="https://ubc-geos472-spring2023.github.io/HurricaneKatrina/Louisiana_Demographic_Map/65_Years_over">65 Years and over</button>
      <button onclick="https://ubc-geos472-spring2023.github.io/HurricaneKatrina/Louisiana_Demographic_Map/Income_below_poverty">Income below poverty level</button>
    </div>
    
    <script>
      mapboxgl.accessToken = 'pk.eyJ1Ijoia2RhbnRlIiwiYSI6ImNsZXhjbjhwajAxZXg0M28yaHFjbnA1dWIifQ.vVnoYcNzAfHwi64sy_ypCQ';

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kdante/clgu79j0b001l01r6blwa99iq',
        center: [-91, 31],
        zoom: 6
      });
    </script>
  </body>
</html>