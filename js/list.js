
var app = angular.module('myApp',['geolocation'])

    .controller('myCtrl', function ($scope,geolocation,$http) {
        $scope.getdist=function(x,y){
            $scope.gx=x;
            $scope.gy=y;
        };


        geolocation.getLocation().then(function(data){
            $scope.lat = data.coords.latitude;
            $scope.lng = data.coords.longitude;


            url = "https://api.foursquare.com/v2/venues/search?ll=" + $scope.lat + "," + $scope.lng + "&oauth_token=00QSVLFXSKRYI5YVCZMP0ZWQ3RZSUNS1E3FFXRCRKMYMY2OQ&v=20160511";
            $http.get(url)
                .success(function (data) {
                    $scope.data = data.response.venues;
                    alert('SUCCESS!');
                })
                .error(function () {
                    alert('ERROR');
                });
        });

        geolocation.getLocation().then(function(data,getdist){
            $scope.lat = data.coords.latitude;
            $scope.lng = data.coords.longitude;


            var dirmap = L.map('mapid2').setView([$scope.lat, $scope.lng], 16);


            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                maxZoom: 18,
                id: 'sepehr3b.036hdd0e',
                accessToken: 'pk.eyJ1Ijoic2VwZWhyM2IiLCJhIjoiY2luenlra3ZqMDB0OXZmbTI0cjZ3bTNrbiJ9.At7ppxkLHjokYhH1N0LoAQ'
            }).addTo(dirmap);


            L.marker([$scope.lat, $scope.lng]).addTo(dirmap)
                .bindPopup('مکان شما')
                .openPopup();

            L.marker([$scope.getdist.gx, $scope.getdist.gy]).addTo(dirmap)
                .bindPopup('مقصد شما')
                .openPopup();

            L.Routing.control({
                waypoints: [
                    L.latLng($scope.lat, $scope.lng),
                    L.latLng($scope.getdist.gx,$scope.getdist.gy)
                ]
            }).addTo(dirmap);

        });


    });





