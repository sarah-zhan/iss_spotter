
//const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');
//const myCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIp("70.70.38.235", (error, coordinates) => {
//   if (error) {
//     callback("It didn't work!", error);
//     return;
//   }
  
//   console.log('It worked! Returned coordinates:', coordinates);
// });



// fetchISSFlyOverTimes(myCoords, (error, passTimes) => {
//   if (error) {
//     callback("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', passTimes);
// });



const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});