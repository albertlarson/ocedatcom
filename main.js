// main.js

import { data } from './data.js';

// Function to determine color based on average sea level
function getColor(avgSeaLevel) {
    return avgSeaLevel > 2 ? 'red' :
           avgSeaLevel > 1.5 ? 'orange' :
           avgSeaLevel > 1 ? 'yellow' :
           avgSeaLevel > 0 ? 'green' :
                             'blue';
}

// Initialize the map
const map = L.map('map').setView([39.8283, -98.5795], 4); // Center of the US
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create the chart
const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Sea Level (m)',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            }
        }
    }
});

// Function to update the chart
function updateChart(location) {
    const dataSet = data.find(d => d.location === location);
    if (dataSet) {
        myChart.data.labels = dataSet.dates;
        myChart.data.datasets[0].data = dataSet.seaLevel;
        myChart.update();
        document.getElementById('chart-container').style.display = 'block'; // Show the chart container
    }
}

// Add CircleMarkers to the map
data.forEach(point => {
    L.circleMarker([point.lat, point.lng], {
        color: getColor(point.avgSeaLevel),
        radius: 8
    }).addTo(map)
        .bindPopup(point.location)
        .on('click', () => {
            updateChart(point.location);
        });
});