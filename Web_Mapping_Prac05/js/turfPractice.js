import { pointsCollection } from "../js/points.js"

function turfFunctions(map) {
    // console.log('This text is from a module')
    // alert('Hello from my module!')
      // define point coordinates
    const pointCoords = [26.71552, 58.37393]
  // define a point
    const myPoint = turf.point(pointCoords)
  // convert the point to geoJSON object
    const geoJSON_point = L.geoJSON(myPoint)
  // add the geoJSON object to the map
    geoJSON_point.addTo(map)

    const pointCoords2 = [26.71489, 58.37439]
  // define a point
    const myPoint2 = turf.point(pointCoords2)
  // convert the point to geoJSON object
    const geoJSON_point2 = L.geoJSON(myPoint2)
  // add the geoJSON object to the map
    geoJSON_point2.addTo(map)

    const pointCoords3 = [26.71216, 58.37428]
  // define a point
    const myPoint3 = turf.point(pointCoords3)
  // convert the point to geoJSON object
    const geoJSON_point3 = L.geoJSON(myPoint3)
  // add the geoJSON object to the map
    // geoJSON_point3.addTo(map)



    const pointCoords4 = [25.7025146484375, 58.790978406215565]
  // define a point
    const myPoint4 = turf.point(pointCoords4)
  // convert the point to geoJSON object
    const geoJSON_point4 = L.geoJSON(myPoint4)
  // add the geoJSON object to the map
    geoJSON_point4.addTo(map)


    const pointCoords5 = [4.383544921875001, 50.74688365485322]
  // define a point
    const myPoint5 = turf.point(pointCoords5)
  // convert the point to geoJSON object
    const geoJSON_point5 = L.geoJSON(myPoint5)
  // add the geoJSON object to the map
    geoJSON_point5.addTo(map)

    var greatCircle = turf.greatCircle(myPoint4, myPoint5, {
        properties: { name: "Estonia to Belgium" },
    })
    const geoJSON_gCirvle = L.geoJSON(greatCircle)
  // add the geoJSON object to the map
    geoJSON_gCirvle.addTo(map)

    const midpoint = turf.midpoint(pointCoords4, pointCoords5);
    const geoJSON_midpoint = L.geoJSON(midpoint)
  // add the geoJSON object to the map
    geoJSON_midpoint.addTo(map)

    // Calculate the distance between the two points in kilometers
const distance_gCircle = turf.distance(myPoint4, myPoint5, {units: 'kilometers'});

// Log the distance to the console
  console.log(`Great Circle Distance: ${distance_gCircle.toFixed(2)} km`);


    



    // define line coordinates
const lineCoords = [
    [26.71379, 58.37476],
    [26.71554, 58.37349],
    [26.71553, 58.37434],
    [26.71630, 58.37378],
    [26.71473, 58.37407]
  ]
  // define the line object
  const myLine = turf.lineString(lineCoords)

  const geoJSON_line = L.geoJSON(myLine)

  geoJSON_line.addTo(map)


  // define polygon coordinates
const polygonCoords = [[
    [26.71355, 58.37468],
    [26.71404, 58.37430],
    [26.71433, 58.37429],
    [26.71550, 58.37345],
    [26.71660, 58.37388],
    [26.71615, 58.37420],
    [26.71589, 58.37431],
    [26.71552, 58.37461],
    [26.71521, 58.37496],
    [26.71480, 58.37481],
    [26.71449, 58.37502],
    [26.71355, 58.37468]
  ]]
  // define polygon object
  const myPolygon = turf.polygon(polygonCoords)

  const geoJSON_poly = L.geoJSON(myPolygon)

  geoJSON_poly.addTo(map)

  const options = { units: 'meters' }


  // replace point1 and point2 with the actual names you used to define your Turf points
const distance = turf.distance(myPoint, myPoint2, options)

// round the distance to nearest integer
const distanceRounded = Math.round(distance)
// distance is first multiplied by 100, then rounded and divided by 100 to keep two digits after the decimal point
const roundedToTwoDecimals = Math.round(distance*100)/100
// compare the results
// console.log(`distance is ${distance} meters`)
// console.log(`rounded to nearest integer: ${distanceRounded}`)
// console.log(`rounded to two decimal points: ${roundedToTwoDecimals}`)


// Measuring area
const areaMeasurement = turf.area(myPolygon)
const areaRounded = Math.round(areaMeasurement)
// console.log(`Area without rounding: ${areaMeasurement}`)
// console.log(`Rounded area is ${areaRounded} square meters`)

// Statue buffer
const statueBuffer = turf.buffer(myPoint, 20, {units: 'meters'})
// L.geoJSON(statueBuffer).addTo(map)

// Walkways buffer
const pathBuffer = turf.buffer(myLine, 20, {units: 'meters'})
// L.geoJSON(pathBuffer).addTo(map)

// Polygon buffer
const polyBuffer = turf.buffer(myPolygon, 20, {units: 'meters'})
// L.geoJSON(polyBuffer).addTo(map)

// Negative buffer
const parkBufferNegative = turf.buffer(myPolygon, -10, {units: 'meters'})
// L.geoJSON(parkBufferNegative).addTo(map)


/////////////////////
// ENVELOPE 
/////////////////////
// create a feature collection
const features = turf.featureCollection([myPoint, myPoint3, myLine, myPolygon])
// create the envelope
const enveloped = turf.envelope(features)
// add to map
// L.geoJSON(enveloped).addTo(map)

/////////////////////
// Points within polygon 
/////////////////////
const points = turf.points(pointsCollection)
// L.geoJSON(points).addTo(map)

const pointsWithinBorders = turf.pointsWithinPolygon(points, myPolygon)
// this should log an object that contains all the features within the park polygon
// console.log(pointsWithinBorders)
L.geoJSON(pointsWithinBorders).addTo(map)




/////////////////////
// Creating your own geometries
/////////////////////
// map.on('click', function(event) {
//     console.log(`[${event.latlng.lng}, ${event.latlng.lat}]`)
//     // define coordinates of the point
// //    let pointCoords = [event.latlng.lng, event.latlng.lat]
//     // create a turf point
// //    let turfPoint = turf.point(pointCoords)
//     // convert the point to GeoJSON format and add it to the map
// //    L.geoJSON(turfPoint).addTo(map)
// })



}

export { turfFunctions }