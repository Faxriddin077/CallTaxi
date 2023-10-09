export const storage_name = "storage";

export const map_style = [
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ color: "#444444" }],
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f2f2f2" }],
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: -100 }, { lightness: 45 }],
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }],
    },
    {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
    }
];

export const google = window.google ?? {maps: {Map: null, Marker: null, LatLng: null, InfoWindow: null}};
