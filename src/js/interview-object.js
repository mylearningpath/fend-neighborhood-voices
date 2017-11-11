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
    // Animate clicked marker
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () {
      marker.setAnimation(null);
    }, 700);
  };
}

export default interviewObject;

