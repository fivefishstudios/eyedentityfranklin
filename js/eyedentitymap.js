// google maps to create map and marker for Eyedentity Eyecare location
    var map;
    function initMap() {
      // lat/lng for Eyedentity Eyecare
      var myLatLng = {lat: 35.9957665, lng: -86.885815};
      var contentString = '<b>Eyedentity Eyecare</b><br>' + 
          '2176 Hillsboro Road, Suite 100<br>' +
          'Franklin, TN 37069-6230'; 
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });

      // draw map showing this location
      map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng, 
        zoom: 15
      });

      // drop location marker
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Eyedentity Eyecare'
      });
     
      // X seconds after the center of the map has changed, pan back to the
      // marker.
      // map.addListener('center_changed', function() {
      //   // window.setTimeout(function() {
      //   //   map.panTo(marker.getPosition());
      //   // }, 30000);
      // });

      // open infowindow
      marker.addListener('click', function() {
        // map.setZoom(17);
        map.setCenter(marker.getPosition());
        infowindow.open(map, marker);
      });
    }

    