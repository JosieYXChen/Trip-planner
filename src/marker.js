import mapboxgl, { Marker } from "mapbox-gl";

const iconURLs = {
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
  activities: "url(http://i.imgur.com/WbMOfMl.png)"
}

function createMarker(type, coordinate) {
  const marker = document.createElement("div");
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = iconURLs[type];
  return new mapboxgl.Marker(marker).setLngLat(coordinate);
}

export default createMarker;
