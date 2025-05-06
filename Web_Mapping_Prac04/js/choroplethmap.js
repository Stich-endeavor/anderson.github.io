var map = L.map('map').setView([58.373523, 26.716045], 12);

const osm = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});
  
osm.addTo(map);


addGeoJson('geojson/tartu_city_districts_edu.geojson')

// add geoJSON layer
async function addGeoJson(url) {
  const response = await fetch(url)
  const data = await response.json()
  L.choropleth(data, {
    valueProperty: 'OBJECTID',
    scale: ['#ffffff', '#ff9900'],
    steps: 5,
    mode: 'q', // q for quantile, e for equidistant
    style: {
      color: '#fff',
      weight: 2,
      fillOpacity: 0.8,
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('Value: ' + feature.properties.OBJECTID)
    },
  }).addTo(map)
}

// add geoJSON polygons layer*
// async function addDistrictsGeoJson(url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     const polygons = L.geoJson(data, {
//         onEachFeature: popUPinfo,
//         style: polygonStyle,
//     })
//     polygons.addTo(map)
// }


//   // add popup to each feature
// function popUPinfo(feature, layer) {
//     layer.bindPopup(feature.properties.NIMI)
// }

// get color from feature property
// function getColor(property) {
//     switch (property) {
//       case 1:
//         return '#ff0000'
//       case 13:
//         return '#009933'
//       case 6:
//         return '#0000ff'
//       case 7:
//         return '#ff0066'
//       default:
//         return '#ffffff'
//     }
// }
  
// // polygon style
//   function polygonStyle(feature) {
//     return {
//       fillColor: '#ffffff',
//       fillOpacity: 0,
//       weight: 2,
//       opacity: 1,
//       color: 'grey',
//     }
// }

// add geoJSON points layer*
// async function addCelltowersGeoJson(url) {
//   const response = await fetch(url)
//   const data = await response.json()
//   const markers = L.geoJson(data)
//   markers.addTo(map)
// }

// add geoJSON points layer*
// async function addCelltowersGeoJson(url) {
//   const response = await fetch(url)
//   const data = await response.json()
//   const circles = L.geoJson(data, {
//     pointToLayer: createCircle,
//   })
//   circles.addTo(map)
// }

// add geoJSON layer
// async function addCelltowersGeoJson(url) {
//   const response = await fetch(url)
//   const data = await response.json()
//   const markers = L.geoJson(data)
//   const clusters = L.markerClusterGroup()
//   clusters.addLayer(markers)
//   clusters.addTo(map)
// }

// add geoJSON layer
// add geoJSON layer
// async function addGeoJson(url) {
//   const response = await fetch(url)
//   const data = await response.json()
//   const heatData = data.features.map(heatDataConvert)
//   const heatMap = L.heatLayer(heatData, { radius: 10 })
//   heatMap.addTo(map)
// }

// function heatDataConvert(feature) {
//   return [
//     feature.geometry.coordinates[1],
//     feature.geometry.coordinates[0],
//     feature.properties.area,
//   ]
// }

// addGeoJson('geojson/tartu_city_celltowers_edu.geojson')

// addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')

// function createCircle(feature, latlng) {
//   let options = {
//     radius: 5,
//     fillColor: 'red',
//     fillOpacity: 0.5,
//     color: 'red',
//     weight: 1,
//     opacity: 1,
//   }
//   return L.circleMarker(latlng, options)
// }

// default map settings
function defaultMapSettings() {
  map.setView([58.373523, 26.716045], 12)
}
