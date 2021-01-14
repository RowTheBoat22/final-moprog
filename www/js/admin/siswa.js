angular.module('starter.adminsiswa', [])

.controller('SiswaCtrl', function($scope, $stateParams, $http, $state, $ionicPopup){
    var url = "http://localhost/apiuas/admin/";

    $scope.usersData = {};

    // siswa retrieve READ
    $http.get(url+"siswa_retrieve.php").success(function(response){
        $scope.showSiswa =  response.records;
    })

    // siswa create || userd_id for username
    $scope.createSiswa = function(){
        var user_id = $scope.usersData.user_id;
        var user_nama = $scope.usersData.user_nama;
        var user_alamat = $scope.usersData.user_alamat;
        var user_jen_kel = $scope.usersData.user_jen_kel;

        if (user_id!=undefined && user_nama!=undefined && user_alamat != undefined && user_jen_kel != undefined) {
            $str = url + "siswa_create.php?username="+user_id+"&nama="+user_nama + "&alamat=" + user_alamat + "&jen_kel=" + user_jen_kel;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil disimpan'
                    })

                    $state.go('menu.siswa', [], {location: "replace", reload: true});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal disimpan'
                    })
                    $state.go('menu.siswa-create', [], {location: "replace", reload: true});
                }
            }).error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Mohon diisi Username/Password'
            })
        }
    }

    // get data for update
    $http.get(url+"siswa_show.php?username="+$stateParams.siswaId)
        .success(function(response){
            $scope.userData = response.records;
    })

    // mhs Update
    $scope.updateSiswa = function(){
        var old_username = $stateParams.siswaId;
        var user_username = $scope.userData.username;
        var user_nama = $scope.userData.nama;
        var user_alamat = $scope.userData.alamat;
        var user_jen_kel = $scope.userData.jen_kel;

        console.log('user_username', user_username);
        console.log('old_username', old_username);

        if(user_username && user_nama != undefined && user_alamat!=undefined && user_jen_kel != undefined && old_username != undefined){
            $str = url + "siswa_update.php?username="+user_username+"&nama="+user_nama+"&alamat="+user_alamat+"&jen_kel="+user_jen_kel+"&old_username="+old_username;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('menu.siswa', [], {location: "replace", reload: "true"});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal diupdate'
                    })
                    $state.go('menu.siswa', [], {location: "replace", reload: "true"});
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


    // mhs delete
    $scope.delSiswa = function(username){
        if(username){
            $str = url+"siswa_delete.php?username="+username;
            $http.get($str).success(function(response){
                if(response == true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil dihapus'
                    })
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal dihapus'
                    })
                }
                $state.go('menu.siswa', [], {location: "replace", reload: true});
            }).error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Id tidak terbaca'
            })
        }
    }
})