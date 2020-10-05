import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1Ijoia2V2aW56aWViZXIiLCJhIjoiY2tmd3BzNXgxMW05czJxcWc3ZWppa2dsbyJ9.gfog29iwH22Jqlq5545hrg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});
