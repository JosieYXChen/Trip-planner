import mapboxgl, { Marker } from "mapbox-gl";
import createMarker from "./marker";

// mapboxgl.accessToken = "pk.eyJ1Ijoiam9zaWV5eGNoZW4iLCJhIjoiY2tmd3B0N3B1MGxoNzJ3azAydDQ2eWh2MSJ9.EpcYEd-ZX27gCUzeZxiPog";

mapboxgl.accessToken = "pk.eyJ1Ijoia2V2aW56aWViZXIiLCJhIjoiY2tmd3BzNXgxMW05czJxcWc3ZWppa2dsbyJ9.gfog29iwH22Jqlq5545hrg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = createMarker('hotels', [-87.641, 41.895]);
marker.addTo(map);
