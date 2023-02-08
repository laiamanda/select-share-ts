declare var ol: any;

const form = document.querySelector('form')!; //! = will be there
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event){
    event.preventDefault(); 
    const coordinates = {lat: 40.31, lng: -73.99} // dummy data

    // send this to Open Layer
    document.getElementById('map')!.innerHTML = ''; // Clear <p> from id = map id

    new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
            zoom: 16
        })
    });
}

form.addEventListener('submit', searchAddressHandler);