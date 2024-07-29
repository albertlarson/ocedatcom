// data.js

// Sample data structure with 20 datasets along coastal locations (first 10 entries)
const data = [
    {
        location: "Gulf of Alaska",
        lat: 58.3019,
        lng: -134.4197,
        seaLevel: [2.9, 1.8, 2.4, 2.7, 2.5, 2.1, 2.8, 2.2, 2.9, 2.6, 2.3, 3.1, 2.7, 2.4, 2.2, 2.9, 2.5, 2.8, 2.3, 2.6],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Gulf of Mexico",
        lat: 29.9342,
        lng: -89.9634,
        seaLevel: [1.8, 1.2, 1.4, 1.1, 1.5, 1.7, 1.6, 1.3, 1.1, 1.8, 1.5, 1.2, 1.9, 1.3, 1.6, 1.4, 1.7, 1.2, 1.9, 1.3],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Georgia",
        lat: 31.9686,
        lng: -81.0912,
        seaLevel: [0.8, 1.1, 1.3, 1.0, 1.4, 1.1, 0.9, 1.5, 1.2, 0.8, 1.3, 1.6, 1.2, 1.4, 1.0, 1.5, 1.3, 1.1, 0.9, 1.4],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Rhode Island",
        lat: 41.5801,
        lng: -71.4774,
        seaLevel: [1.2, 1.0, 0.7, 1.1, 0.8, 1.3, 0.9, 1.0, 0.7, 0.9, 1.2, 0.8, 1.1, 0.9, 0.7, 1.3, 0.6, 0.8, 1.1, 1.0],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "California",
        lat: 36.7783,
        lng: -119.4179,
        seaLevel: [1.4, 1.6, 1.3, 1.7, 1.9, 1.5, 1.8, 1.2, 1.6, 1.9, 1.3, 1.8, 1.5, 1.7, 1.2, 1.4, 1.9, 1.6, 1.8, 1.3],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Washington",
        lat: 47.7511,
        lng: -120.7401,
        seaLevel: [1.7, 2.0, 1.8, 2.1, 1.9, 2.2, 1.6, 2.3, 2.0, 1.7, 2.1, 1.9, 2.3, 1.8, 2.0, 2.2, 1.9, 1.8, 2.0, 2.3],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Portland, Maine",
        lat: 43.6591,
        lng: -70.2568,
        seaLevel: [0.5, 0.8, 0.7, 0.9, 1.0, 0.6, 0.9, 0.7, 0.8, 1.1, 0.9, 0.7, 1.2, 0.6, 1.0, 0.8, 1.1, 0.7, 1.0, 0.6],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Portland, Oregon",
        lat: 45.5122,
        lng: -122.6587,
        seaLevel: [1.2, 1.5, 1.3, 1.6, 1.4, 1.7, 1.2, 1.8, 1.5, 1.3, 1.6, 1.4, 1.7, 1.3, 1.5, 1.8, 1.4, 1.6, 1.2, 1.7],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Charleston",
        lat: 32.7765,
        lng: -79.9311,
        seaLevel: [1.3, 1.6, 1.4, 1.7, 1.5, 1.8, 1.4, 1.9, 1.7, 1.5, 1.8, 1.4, 1.9, 1.6, 1.4, 1.8, 1.5, 1.7, 1.4, 1.9],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Boston",
        lat: 42.3601,
        lng: -71.0589,
        seaLevel: [0.9, 1.2, 1.0, 1.3, 1.1, 1.4, 1.0, 1.5, 1.3, 1.1, 1.4, 1.2, 1.5, 1.1, 1.3, 1.2, 1.4, 1.0, 1.2, 1.3],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Miami",
        lat: 25.7617,
        lng: -80.1918,
        seaLevel: [1.5, 1.7, 1.8, 1.9, 1.6, 2.0, 1.7, 2.1, 1.8, 1.5, 2.1, 1.6, 1.8, 2.2, 1.9, 1.7, 1.5, 1.8, 2.1, 2.3],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "San Diego",
        lat: 32.7157,
        lng: -117.1611,
        seaLevel: [2.0, 2.2, 2.1, 2.4, 2.0, 2.3, 2.5, 2.1, 2.6, 2.3, 2.5, 2.0, 2.4, 2.1, 2.7, 2.2, 2.5, 2.3, 2.1, 2.8],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "San Francisco",
        lat: 37.7749,
        lng: -122.4194,
        seaLevel: [1.8, 2.0, 1.9, 2.1, 1.8, 2.2, 2.1, 2.3, 2.0, 1.8, 2.1, 2.0, 2.3, 1.9, 2.0, 2.2, 1.9, 2.1, 2.3, 2.4],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Los Angeles",
        lat: 34.0522,
        lng: -118.2437,
        seaLevel: [1.6, 1.8, 1.7, 1.9, 1.6, 2.0, 1.8, 2.1, 1.9, 1.6, 2.0, 1.7, 1.9, 2.2, 1.8, 1.7, 2.0, 1.9, 2.1, 2.2],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Seattle",
        lat: 47.6062,
        lng: -122.3321,
        seaLevel: [1.9, 1.4, 1.3, 1.5, 1.1, 1.6, 1.4, 1.7, 1.3, 1.1, 1.5, 1.3, 1.6, 1.2, 1.4, 1.3, 1.6, 1.2, 1.5, 1.7],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Galveston",
        lat: 29.3013,
        lng: -94.7977,
        seaLevel: [0.7, 1.0, 0.9, 1.1, 0.7, 1.2, 0.9, 1.3, 1.1, 0.8, 1.3, 1.0, 1.2, 0.8, 1.0, 1.1, 0.8, 1.3, 1.1, 1.4],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Savannah",
        lat: 32.0809,
        lng: -81.0912,
        seaLevel: [1.0, 1.3, 1.2, 1.4, 1.1, 1.5, 1.3, 1.6, 1.2, 1.0, 1.4, 1.2, 1.5, 1.3, 1.1, 1.2, 1.4, 1.1, 1.5, 1.6],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "New Orleans",
        lat: 29.9511,
        lng: -90.0715,
        seaLevel: [1.9, 2.2, 2.1, 2.3, 1.9, 2.4, 2.1, 2.5, 2.3, 2.0, 2.4, 2.2, 2.5, 2.1, 2.3, 2.2, 2.4, 2.0, 2.3, 2.6],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Virginia Beach",
        lat: 36.8529,
        lng: -75.9780,
        seaLevel: [1.2, 1.5, 1.3, 1.6, 1.4, 1.7, 1.3, 1.8, 1.5, 1.2, 1.6, 1.4, 1.7, 1.3, 1.5, 1.4, 1.7, 1.2, 1.6, 1.8],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    },
    {
        location: "Atlantic City",
        lat: 39.3643,
        lng: -74.4229,
        seaLevel: [1.0, 1.3, 1.2, 1.4, 1.1, 1.5, 1.3, 1.6, 1.2, 1.0, 1.4, 1.2, 1.5, 1.3, 1.1, 1.2, 1.4, 1.1, 1.5, 1.6],
        dates: Array.from({ length: 20 }, (_, i) => `2024-07-${String(i + 1).padStart(2, '0')}`)
    }
];

data.forEach(point => {
    point.avgSeaLevel = point.seaLevel.reduce((a, b) => a + b, 0) / point.seaLevel.length;
});

export { data };