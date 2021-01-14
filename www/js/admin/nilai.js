angular.module('starter.adminnilai', [])

.controller('NilaiCtrl', function ($scope, $stateParams, $http, $state, $ionicPopup) {
    var url = "http://localhost/apiuas/admin/";

    $scope.nilaisData = {};
    $scope.curUserId = $stateParams.siswaId;
    $scope.user = {'UID':$stateParams.siswaId};

    // mhs retrieve READ
    $http.get(url+"nilai_retrieve_matpel.php?username="+$stateParams.siswaId).success(function(response){
        $scope.showNilaiMatpel =  response.records;
    })

    // create nilai
    $scope.createNilai = function () {
        var nilai_username = $scope.user.UID;
        var nilai_id_matpel = $scope.nilaisData.id_matpel;
        var nilai_pengetahuan = $scope.nilaisData.pengetahuan;
        var nilai_keterampilan = $scope.nilaisData.keterampilan;

        console.log(nilai_username, nilai_id_matpel, nilai_pengetahuan, nilai_keterampilan);

        if (nilai_username!=undefined && nilai_id_matpel!=undefined && nilai_pengetahuan != undefined && nilai_keterampilan != undefined ) {
            $str = url + "nilai_create.php?username="+nilai_username+"&id_matpel="+nilai_id_matpel + "&pengetahuan=" + nilai_pengetahuan + "&keterampilan=" + nilai_keterampilan;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil disimpan'
                    })

                    $state.go('menu.nilai-siswa', [], {location: "replace", reload: true});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal disimpan'
                    })
                    $state.go('menu.nilai-siswa', [], {location: "replace", reload: true});
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
    $http.get(url+"nilai_show.php?username="+$stateParams.siswaId+"&id_matpel="+$stateParams.matpelId)
        .success(function(response){
            $scope.nilaiData = response.records;
    })

    // update nilai
    $scope.updateNilai = function () {
        var nilai_username = $scope.nilaiData.username;
        var nilai_id_matpel = $scope.nilaiData.id_matpel;
        var nilai_pengetahuan = $scope.nilaiData.pengetahuan;
        var nilai_keterampilan = $scope.nilaiData.keterampilan;

        console.log(nilai_username, nilai_id_matpel, nilai_pengetahuan, nilai_keterampilan);

        if (nilai_username!=undefined && nilai_id_matpel!=undefined && nilai_pengetahuan != undefined && nilai_keterampilan != undefined ) {
            $str = url + "nilai_update.php?username="+nilai_username+"&id_matpel="+nilai_id_matpel + "&pengetahuan=" + nilai_pengetahuan + "&keterampilan=" + nilai_keterampilan;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil disimpan'
                    })

                    $state.go('menu.nilai-siswa', [], {location: "replace", reload: true});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal disimpan'
                    })
                    $state.go('menu.nilai-siswa', [], {location: "replace", reload: true});
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

    // delete nilai
    $scope.deleteNilai = function (username, id_matpel) {
        if(username, id_matpel){
            $str = url+"nilai_delete.php?username="+username+"&id_matpel="+id_matpel;
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
                $state.go('menu.nilai-matpel', [], {location: "replace", reload: true});
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