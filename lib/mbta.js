'use strict';

// Code here.

// Create an array for each line
var subwayLines = {
  Red: [
    "South Station",
    "Park Street",
    "Kendall",
    "Central",
    "Harvard",
    "Porter",
    "Davis",
    "Alewife"
   ],
  Green: ["Government Center",
    "Park Street",
    "Boylston",
    "Arlington",
    "Copley",
    "Hynes",
    "Kenmore"
  ],
  Orange: [
    "North Station",
    "Haymarket",
    "Park Street",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Back Bay",
    "Forest Hills"
  ]
};

var stopNumber = function stopNumber(stop, line) {
  for (var i = 0; i < line.length; i++) {
    if (line[i] === stop) {
      return i;
    }
  }
  return 0;
}

var stopsOnOneLine = function(line, start, end) {
  var stops =
    stopNumber(start, subwayLines[line]) -
    stopNumber(end, subwayLines[line]);
  return stops < 0 ? -stops : stops;
};

var stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
  var stops = 0;
  if (startLine === endLine) {
    stops = stopsOnOneLine(startLine, startStation, endStation);
  } else {
    stops = stopsOnOneLine(startLine, startStation, 'Park Street') +
      stopsOnOneLine(endLine, endStation, 'Park Street');
  }

  return stops;
};

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
};
