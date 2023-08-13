export default function initMap(leafletObject) {
  const maps = document.querySelectorAll(".map");
  maps.forEach((item) => {
    const L = leafletObject;
    const coordinatesString = item.dataset.coordinates.split(",");
    const coordinates = coordinatesString.map((cord) => Number(cord.trim()));
    console.log(coordinates);

    var map = L.map(`${item.id}`).setView(coordinates, 16);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
  });
}
