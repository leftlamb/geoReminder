function setLastPoint(localStorage, point) {
    console.log(point)
    let lastPoint = JSON.stringify(point);
    localStorage.setItem('lastPoint', lastPoint);
}

function getLastPoint(localStorage) {
    return JSON.parse(localStorage.getItem('lastPoint'))
}

function addPoint(localstorage, point, message) {
    if(localstorage.getItem('points') == null) {
        localStorage.setItem('points', JSON.stringify([
            {
                point: [point],
                message: message
            }
        ]))
    } else {
        let data = JSON.parse(localstorage.getItem('points'));
        data.push(
            {
                point: [point],
                message: message
            })
        localstorage.setItem('points', JSON.stringify(data));
    }
    console.log(localstorage);
}

function getSavedPoints(localStorage) {
    return JSON.parse(localStorage.getItem("points"));
}

export {setLastPoint, getLastPoint, addPoint, getSavedPoints}