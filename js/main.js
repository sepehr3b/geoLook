
    navigator.geolocation.getCurrentPosition(function(position) {
         var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        var newmap = L.map('mapid').setView([pos.lat, pos.lng], 16);


        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'sepehr3b.036hdd0e',
            accessToken: 'pk.eyJ1Ijoic2VwZWhyM2IiLCJhIjoiY2luenlra3ZqMDB0OXZmbTI0cjZ3bTNrbiJ9.At7ppxkLHjokYhH1N0LoAQ'
        }).addTo(newmap);


        L.marker([pos.lat, pos.lng]).addTo(newmap)
            .bindPopup('مکان شما')
            .openPopup();


    });








