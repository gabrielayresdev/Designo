import initDropdown from "./modules/dropdown.js";
import initMap from "./modules/maps.js";
import translate from "./modules/translate.js";

if (typeof L !== "undefined") {
  initMap(L);
}
initDropdown();
translate();
