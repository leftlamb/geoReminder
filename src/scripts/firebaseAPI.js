import fire from './firebase';

export function getPoints() {
    let firePoints = fire.database().ref('points');
    let list = []
    firePoints.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        list.push([childSnapshot.child("0").val(), childSnapshot.child("1").val()])
      })
    });
    return list;
}

