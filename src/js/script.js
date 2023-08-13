import initDropdown from "./modules/dropdown.js";
import initMap from "./modules/maps.js";

if (typeof L !== "undefined") {
  initMap(L);
}
initDropdown();
