angular.module('starter.usersiswa', [])

.controller('UserSiswaCtrl', function ($scope, $stateParams, $http, $state, $ionicPopup) {
    var url = "http://localhost/apiuas/siswa/";

    $scope.UsersData = {};

    $scope.userid = sessionStorage.getItem('login_username');

    $scope.updatePass = function () {
        var user_username = sessionStorage.getItem('login_username');
        var user_password = $scope.UsersData.password;

        console.log(user_username, user_password);

        if(user_username != undefined && user_password != undefined){
            $str = url + "update_pass.php?username="+user_username+"&userpass="+user_password;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('menu.user-update-pass', [], {location: "replace", reload: "true"});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal diupdate'
                    })
                    $state.go('menu.user-update-pass', [], {location: "replace", reload: "true"});
                }
            }).error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada sedikit kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Mohon diisi Username/Password'
            })
        }
    }

    $http.get(url+"nilai_index.php?username="+$scope.userid+"&kelompok=A")
        .success(function (response) {
            $scope.NilaiDataA = response.records;
        })

    $http.get(url+"nilai_index.php?username="+$scope.userid+"&kelompok=B")
        .success(function (response) {
            $scope.NilaiDataB = response.records;
        })

    $http.get(url+"nilai_index.php?username="+$scope.userid+"&kelompok=C")
        .success(function (response) {
            $scope.NilaiDataC = response.records;
        })

})