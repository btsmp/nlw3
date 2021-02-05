const map = L.map("mapid").setView([-9.653746, -35.7221577], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;
// creat and add marker
map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    //remove icon

    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

//  photos upload

function addPhotoField() {
    // catch photo container #images

    const container = document.querySelector("#images");
    // pegar o container para duplicar .new-image

    const fieldsContainer = document.querySelectorAll(".new-upload");
    // realizar o clone da ultima imagem adicionada

    const newFieldContainer = fieldsContainer[
        fieldsContainer.length - 1
    ].cloneNode(true);

    // verificar se campo está vazio
    const input = newFieldContainer.children[0];
    //limpar o campo imagem

    if (input.value == "") {
        return;
    }
    // adicionar o clone ao container de imagens

    input.value = "";

    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll(".new-upload");

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();
}

//select yes or no

function toggleSelect(event) {
    document
        .querySelectorAll(".button-select button")
        .forEach((button) => button.classList.remove("active"));
    const button = event.currentTarget;
    button.classList.add("active");
    
    const input = document.querySelector('[name="open_on_weekends');
    input.value = button.dataset.value;

}
