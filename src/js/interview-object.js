import axios from 'axios';
import { setTimeout } from 'timers';

const interviewObject = function(data, map) {
  var self = this;

  this.title = data.title;
  this.interviewee = data.interviewee;
  this.url = data.url;
  this.lat = data.lat;
  this.lng = data.lng;
  this.media = "";

  // Instantiate Google Maps Marker object
  this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(data.lat, data.lng),
    map: map,
    animation: google.maps.Animation.DROP
  });

  this.marker.addListener('click', function () {
    self.selectInterview();
  });

  // Click event listener on .content-list__item
  interviewObject.prototype.selectInterview = function () {
    var marker = this.marker;
    var interviewUrl = this.url;

    // Animate clicked marker or list item
    marker.setAnimation(google.maps.Animation.BOUNCE);

    if (this.media === "" ) {
      var baseUrl = "https://soundcloud.com/oembed?url="
      axios.get(baseUrl + interviewUrl + "&format=json&maxheight=166&show_comments=false")
        .then(function (response) {
          self.media = response.data.html;
          console.log(self.media);
          marker.setAnimation(null);
        });
    } else {
      console.log(this.media + " test");
      setTimeout(function() {
        marker.setAnimation(null);
      }, 700);
    }
  };
}

export default interviewObject;

