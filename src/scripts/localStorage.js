function setLastPoint(localStorage, point) {
    let lastPoint = JSON.stringify(point);
    localStorage.setItem('lastPoint', lastPoint);
}

function getLastPoint(localStorage) {
    return JSON.parse(localStorage.getItem('lastPoint'))
}

export {setLastPoint, getLastPoint}