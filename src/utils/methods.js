import {useCookies} from "vue3-cookies";
import {google, storage_name} from "@/utils/index";

const {cookies} = useCookies();


export function getToken(name) {
    return getCookie(name)?.access_token;
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
    let position = {lat: 41.54214231800138, lng: 60.63157875439325};
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

export function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours().toString().padStart(2, '0'),
        minute = d.getMinutes().toString().padStart(2, '0');

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-') + ' ' + hour + ':' + minute;
}
