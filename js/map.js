var map = L.map('map').setView([-31.7650, -52.3513], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-31.763383, -52.347167]).addTo(map);
marker.bindPopup("<b>Blueshift.cc</b><br>RUA DOUTOR CASSIANO 603<br>CENTRO<br>PELOTAS<br>RS<br>96015-700").openPopup();