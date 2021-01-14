angular.module('starter.adminmatpel', [])

.controller('MatpelCtrl', function ($scope, $stateParams, $http, $state, $ionicPopup) {
    var url = "http://localhost/apiuas/admin/";

    $scope.MatpelsData = {};

    // mtk retrieve READ
    $http.get(url+"matpel_retrieve.php").success(function(response){
        $scope.showMatpel =  response.records;
    })

    // matpel create
    $scope.createMatpel= function(){
        var matpel_id_matpel = $scope.MatpelsData.matpel_id_matpel;
        var matpel_namamatpel = $scope.MatpelsData.matpel_namamatpel;
        var matpel_kelompok = $scope.MatpelsData.matpel_kelompok;

        if (matpel_id_matpel!=undefined && matpel_namamatpel!=undefined && matpel_kelompok != undefined ) {
            $str = url + "matpel_create.php?id_matpel="+matpel_id_matpel+"&namamatpel="+matpel_namamatpel + "&kelompok=" + matpel_kelompok;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil disimpan'
                    })

                    $state.go('menu.matpel', [], {location: "replace", reload: true});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal disimpan'
                    })
                    $state.go('menu.matpel-create', [], {location: "replace", reload: true});
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
    $http.get(url+"matpel_show.php?id_matpel="+$stateParams.matpelId)
        .success(function(response){
            $scope.MatpelData = response.records;
            $scope.currentData = response.records;
    })

    // update
    $scope.updateMatpel = function(){
        var old_id_matpel = $stateParams.matpelId;
        var id_matpel = $scope.MatpelData.id_matpel;
        var namamatpel = $scope.MatpelData.namamatpel;
        var kelompok = $scope.MatpelData.kelompok;

        if(id_matpel && namamatpel != undefined && kelompok!=undefined){
            $str = url + "matpel_update.php?id_matpel="+id_matpel+"&namamatpel="+namamatpel+"&kelompok="+kelompok+"&old_id_matpel="+old_id_matpel;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('menu.matpel', [], {location: "replace", reload: "true"});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal diupdate'
                    })
                    $state.go('menu.matpel', [], {location: "replace", reload: "true"});
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

    // Matpel delete
    $scope.delMatpel= function(id){
        if(id){
            $str = url+"matpel_delete.php?id_matpel="+id;
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
                $state.go('menu.matpel', [], {location: "replace", reload: true});
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