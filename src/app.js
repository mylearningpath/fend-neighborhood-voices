import ko from './vendor/knockout-3.4.2.js';
import interviewObject from './js/interview-object.js';

const AppViewModel = function (interviews, map) {

  var self = this;

  this.currentMedia = ko.observable('');

  this.interviewsArray = ko.observableArray();
  interviews.forEach(function (data) {
    self.interviewsArray.push(new interviewObject(data, map, function(media) {
      self.currentMedia(media);
    }));
  });

  // User input to filter the list
  this.filter = ko.observable('');

  this.filteredInterviews = ko.computed(function() {
    var filterText = self.filter().toLowerCase();

    return self.interviewsArray().filter(function(interview) {
      if (interview.title.toLowerCase().includes(filterText) === true) {
        interview.marker.setVisible(true);
        return true;
      } else {
        interview.marker.setVisible(false);
        return false;
      }
    });
  });
  
};

export default AppViewModel;
