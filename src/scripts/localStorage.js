import {getPoints} from './firebaseAPI';

function setLastPoint(localStorage, point) {
    let lastPoint = JSON.stringify(point);
    localStorage.setItem('lastPoint', lastPoint);
}

function getLastPoint(localStorage) {
    return JSON.parse(localStorage.getItem('lastPoint'))
}

function savePoints(localStorage, points) {
    localStorage.setItem('points', JSON.stringify(points));
}

function getSavedPoints(localStorage) {
    return JSON.parse(localStorage.getItem('points'))
}

export {setLastPoint, getLastPoint, savePoints, getSavedPoints}