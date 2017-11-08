import ko from './vendor/knockout-3.4.2.js';
import interviewObject from './js/interview-object.js';

const AppViewModel = function (interviews, map) {

  var self = this;

  this.markersArray = ko.observableArray();
  this.visibleMarkersArray = ko.observableArray();
  // Fill markersArray with data from JSON
  interviews.forEach(function (data) {
    self.markersArray.push(new interviewObject(data, map));
  });

  // Set initial list from array
  this.markersArray().forEach(function (data) {
    self.visibleMarkersArray.push(data);
  });
}
  
};

export default AppViewModel;
