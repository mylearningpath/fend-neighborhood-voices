import ko from './vendor/knockout-3.4.2.js';
import './styles/main.scss';
import interviews from './data/interviews';
import AppViewModel from './app';

function initApp() {
  // Init map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -22.940841, lng: -43.2194321 },
    zoom: 12,
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: true
  });

  // Instantiate the ViewModel and apply Knockout bindings
  ko.applyBindings(new AppViewModel(interviews, map));
}

function googleAPIError() {
  alert('Fail to connect to Google API.');
}

// Workaround to make the initApp function visible to Google Maps API
window.initApp = initApp;
