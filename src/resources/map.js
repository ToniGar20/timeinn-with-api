var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:39.679300751176136, lng: 2.9679544556815944},
        zoom: 9.8,
    });
    var marker = new google.maps.Marker({
        position: {lat: 39.58554577234763, lng: 2.6495990538332643},
        map: map,
        title: 'Cine Ciutat'
    });
    var marker = new google.maps.Marker({
        position: {lat: 39.72243165655037, lng: 2.9103674796846564},
        map: map,
        title: 'Teatre inca'
    });
    var marker = new google.maps.Marker({
        position: {lat: 39.57097469359757, lng: 2.6465556085211936},
        map: map,
        title: 'Casal Solleric'
    });
    var marker = new google.maps.Marker({
        position: {lat: 39.59531212693476,  lng: 2.6485636133501367},
        map: map,
        title: 'Ocimax'
    });
    var marker = new google.maps.Marker({
        position: {lat: 39.6469195159186, lng: 2.898936965245083},
        map: map,
        title: 'Cine de Sencelles'
    });
    var marker = new google.maps.Marker({
        position: {lat: 39.569799182662464, lng: 3.2101218839442276},
        map: map,
        title: 'Cine de Manacor'
    });
}


