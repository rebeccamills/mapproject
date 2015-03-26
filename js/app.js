L.mapbox.accessToken = 'pk.eyJ1IjoicmViZWNjYW1pbGxzIiwiYSI6InRMeGMwSzgifQ.-_AkRm4mAT872PmddNfddg';
var map = L.mapbox.map('map', 'rebeccamills.lifog24n')
    .setView([38.922, -77.011], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);



