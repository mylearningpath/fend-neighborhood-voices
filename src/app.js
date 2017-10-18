import ko from './vendor/knockout-3.4.2.js';

const AppViewModel = function(interviews) {
  this.interviews = ko.observableArray(interviews);
  this.selectInterview = function(interview) {
    alert(interview.url);
  }
}

export default AppViewModel;
