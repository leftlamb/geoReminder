import {addPoint, getSavedPoints} from './localStorage';

function createDummyData(localStorage) {
    if(getSavedPoints(localStorage)==null) {
        addPoint(localStorage, [50.994420, -118.163111], 'Life is better in a helicopter');
        addPoint(localStorage, [59.851728, 10.538749], 'Remember to relax in Dinner Bay');
        addPoint(localStorage, [-34.045116, 18.354145], 'Remember the republic');
        addPoint(localStorage, [63.418500, 10.402935], 'Deilig i parken a');
        addPoint(localStorage, [63.428055, 10.402998], 'Kose seg på gamle bybro');
        addPoint(localStorage, [63.421568, 10.404646], 'Husk å hilse Emil');
        addPoint(localStorage, [63.431299, 10.406822], 'Husk å kjøpe yoghurt');
    }
}

export {createDummyData}