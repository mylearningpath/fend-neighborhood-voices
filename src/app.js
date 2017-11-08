import ko from './vendor/knockout-3.4.2.js';
import interviewObject from './js/interview-object.js';

const AppViewModel = function (interviews, map) {

  var self = this;

  this.markersArray = ko.observableArray();
  this.visibleMarkersArray = ko.observableArray();

  // Define observable for filter input
  this.userInput = ko.observable('');

  // Fill markersArray with data from JSON
  interviews.forEach(function (data) {
    self.markersArray.push(new interviewObject(data, map));
  });

  // Set initial list from array
  this.markersArray().forEach(function (data) {
    self.visibleMarkersArray.push(data);
  });


  this.filter = function () {

    // Sanitaze user input
    var input = self.userInput().toLowerCase();

    // Clean visibleMarkersArray
    self.visibleMarkersArray.removeAll();

    self.markersArray().forEach(function (data) {

      if (data.title.toLowerCase().includes(input) === true) {
        // Show marker
        data.marker.setVisible(true);
        // Add marker to visibleMarkersArray
        self.visibleMarkersArray.push(data);
      } else {
        // Hide marker
        data.marker.setVisible(false);
      }
    });
  };
  
};

export default AppViewModel;
