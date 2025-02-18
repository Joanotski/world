// Crear el mapa centrado en el mundo
var map = L.map('mapid').setView([20, 0], 2); // Esto centra el mapa en el ecuador y a una vista global

// Añadir el mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir algunos marcadores
var marcadorParis = L.marker([48.8566, 2.3522]).addTo(map);
marcadorParis.bindPopup("<b>París</b><br>¡Quiero ver la Torre Eiffel!").openPopup();

var marcadorNY = L.marker([40.7128, -74.0060]).addTo(map);
marcadorNY.bindPopup("<b>Nueva York</b><br>¡Quiero ver Central Park!").openPopup();

// Puedes añadir más marcadores aquí para otros lugares
