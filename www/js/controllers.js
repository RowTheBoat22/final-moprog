angular.module('starter.controllers', [])

.controller('MapCtrl', function ($scope, $ionicLoading, $compile, $state, $window) {
    window.initMap = function () {
      var myLatlng = new google.maps.LatLng(-6.172459, 106.797900);
  
      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
      var contentString = "<div><a ng-click='clickTest()'>Universitas Budi Luhur<br>+62-21-5853753</a></div>";
  
      var compiled = $compile(contentString)($scope);
  
      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });
  
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Universitas Budi Luhur'
      });
  
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
  
      $scope.map = map;
    }
  
    google.maps.event.addDomListener(window, 'load', initMap);
    initMap();
    
    $scope.doAbout = function () {
      $window.history.back();
    };
  
})
.controller('TataTertibCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/81")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('VisiMisiCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/83")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('SejarahCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/88")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('SambutanCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/85")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('BeritaCtrl', function ($scope, $http, $state, $window){
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/posts")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    };
})
.controller('DetailBeritaCtrl', function ($scope, $http, $stateParams, $state, $window) {
    $http.get("http://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/posts/"+$stateParams.id)
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})

// Login
.controller('LoginCtrl', function($scope, $ionicPopup, $http, $state, $ionicHistory) {
    var url = "http://localhost/apiuas/";

    $scope.loginData = {};

    $scope.doLogin = function(){
        var adm_user = $scope.loginData.username;
        var adm_pass = $scope.loginData.userpass;

        if (adm_user && adm_pass) {
            str = url + "login.php?name=" + adm_user + "&pass=" + adm_pass;
            $http.get(str)
                .success(function (response) {
                    if (response != '') {
                        $scope.u = response.records;

                        sessionStorage.setItem('login_status', true);
                        sessionStorage.setItem('login_username', $scope.u.username);
                        sessionStorage.setItem('login_userlevel', $scope.u.userlevel);
                        $ionicHistory.nextViewOptions({
                            disableAnimate: true,
                            disableBack: true
                        })

                        $ionicPopup.alert({
                            title: 'Sukses',
                            template: 'Login Sukses'
                        })

                        $state.go('menu.dashboard', {id: $scope.u.username}, {location: 'replace', reload: true})
                    } else {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Username/Password Salah'
                        })
                    }
                })
        } else {
            $ionicPopup.alert({
                title: 'Error',
                template: 'Username/Password Salah'
            })
        }
    }

    $scope.doLogout = function(){
        sessionStorage.removeItem('login_status');
        sessionStorage.removeItem('login_username');
        sessionStorage.removeItem('login_userlevel');

        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        })

        $ionicPopup.alert({
            title: 'Sukses',
            template: 'Logout dari sistem'
        })

        $state.go('login', {}, {location: "replace", reload: true})
    }
})

// Admin Dashboard
.controller('AdminMainCtrl', function($scope, $stateParams, $http, $state, $ionicPopup) {
    var url = "http://localhost/apiuas/admin/";

    $scope.name = sessionStorage.getItem('login_username');

    $http.get(url+"dashboard.php").success(function (response) {
        $scope.data = response.records;
    })


})

// Siswa Dashboard
.controller('SiswaMainCtrl', function($scope, $stateParams, $http, $state, $ionicPopup) {
    var url = "http://localhost/apiuas/siswa/";

    $scope.name = sessionStorage.getItem('login_username');

    $http.get(url+"dashboard.php?username="+$scope.name).success(function (response) {
        $scope.dash = response.records;
    })
})