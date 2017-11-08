const interviewObject = function(data, map) {
  var self = this;

  this.title = data.title;
  this.interviewee = data.interviewee;
  this.url = data.url;
  this.lat = data.lat;
  this.lng = data.lng;

  // Instantiate Google Maps Marker object
  this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(data.lat, data.lng),
    map: map,
    animation: google.maps.Animation.DROP
  });

  this.marker.addListener('click', function () { 
    // Animate clicked marker
    self.marker.setAnimation(google.maps.Animation.BOUNCE);
    // Set time for animation end
    setTimeout(function () {
      self.marker.setAnimation(null);
    }, 700);
  });

  // Click event listener on .content-list__item
  interviewObject.prototype.selectInterview = function () {
    // TO DO
    // LOAD SOUNDCLOUD EMBEDED TO THIS INTERVIEW
    google.maps.event.trigger(this.marker, 'click');
  };
}

export default interviewObject;