import {useCookies} from "vue3-cookies";
import {google, storage_name} from "@/utils/index";

const {cookies} = useCookies();


export function getToken(name) {
    return getCookie(name)?.token;
}

export function getRole() {
    return getCookie(storage_name)?.user?.role_id;
}

// Cookie
export function getCookie(name) {
    return cookies.get(name)
}

export function setCookie(name, data) {
    cookies.set(name, stringify(data));
}

export function removeCookie(name) {
    cookies.remove(name);
}

export function parse(data) {
    return JSON.parse(data);
}

export function stringify(data) {
    return JSON.stringify(data);
}


/* Google Map */

// Geolocation
export function getCurrentLocation() {
    let position = {lat: 41.853398, lng: 60.388230};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            position = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            };
        })
    }

    return position;
}

export function Geocoder() {
    return new google.maps.Geocoder()
}

export function getGoogleMaps() {
    return google.maps;
}

export function LatLng() {
    return new google.maps.LatLng(getCurrentLocation());
}

export function getPosition(latLng) {
    return { ...latLng }
}

export function createInfoWindow(google, opt = {content: 'Mana shu'}) {
    return new google.maps.InfoWindow(opt)
}
