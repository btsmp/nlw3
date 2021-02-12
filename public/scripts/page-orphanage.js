const spanLat = document.querySelector('[data-lat]')
const spanLng = document.querySelector('[data-lng]')

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
const map = L.map("mapid", options).setView([spanLat.dataset.lat, spanLat.dataset.lng], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// creat and add marker
L.marker([spanLat.dataset.lat, spanLat.dataset.lng], { icon }).addTo(map);

// image galery

function selectImage(event) {
  const button = event.currentTarget;

  //remove class .active
  const buttons = document.querySelectorAll(".images button");

  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  //slect image in currentTarget
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  //att image container
  imageContainer.src = image.src;
  //add class .active in curretTarget

  button.classList.add("active");
}
