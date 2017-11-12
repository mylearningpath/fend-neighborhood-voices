import axios from 'axios';
import { setTimeout } from 'timers';

const interviewObject = function(data, map, onSelected) {
  var self = this;
  
  this.title = data.title;
  this.interviewee = data.interviewee;
  this.url = data.url;
  this.lat = data.lat;
  this.lng = data.lng;
  // Callback function that sets currentMedia on ViewModel
  this.onSelected = onSelected;
  self.media = "";
  
  // Instantiate Google Maps Marker object
  this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(data.lat, data.lng),
    map: map,
    animation: google.maps.Animation.DROP
  });
  
  this.marker.addListener('click', function () {
    self.selectInterview();
  });

};

interviewObject.prototype.selectInterview = function () {
  var self = this;

  var marker = this.marker;
  var interviewUrl = this.url;

  // Animate clicked marker or list item
  marker.setAnimation(google.maps.Animation.BOUNCE);

  if (self.media === "") {
    // Loads iframe from SoundCloud API
    var baseUrl = "https://soundcloud.com/oembed?url="
    var apiParameters = "&maxheight=166&show_comments=false&show_artwork=false&color=B721FF&format=json"
    axios.get(baseUrl + interviewUrl + apiParameters)
      .then(function (response) {
        self.media = response.data.html.replace('visual=true&', '');
        self.onSelected(self.media);
        marker.setAnimation(null);
      });
  } else {
    // Loads iframe from cache
    self.onSelected(self.media);
    setTimeout(function () {
      marker.setAnimation(null);
    }, 500);
  }

};

export default interviewObject;

