// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.adminsiswa', 'starter.adminmatpel', 'starter.adminnilai', 'starter.usersiswa'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('front', {
    url: '/front',
    templateUrl: 'templates/front.html'
  })
  .state('location', {
    url: '/location',
    templateUrl: 'templates/location.html',
    controller: 'MapCtrl'
  })
  .state('tata-tertib', {
    url: '/tata-tertib',
    templateUrl: 'templates/pages-template.html',
    controller: 'TataTertibCtrl'
  })
  .state('visi-misi', {
    url: '/visi-misi',
    templateUrl: 'templates/pages-template.html',
    controller: 'VisiMisiCtrl'
  })
  .state('sejarah', {
    url: '/sejarah',
    templateUrl: 'templates/pages-template.html',
    controller: 'SejarahCtrl'
  })
  .state('sambutan', {
    url: '/sambutan',
    templateUrl: 'templates/pages-template.html',
    controller: 'SambutanCtrl'
  })
  .state('berita', {
    url: '/berita/:id',
    templateUrl: 'templates/berita.html',
    controller: 'BeritaCtrl'
  })
  .state('detailberita', {
    url: '/detailberita/:id',
    templateUrl: 'templates/detailberita.html',
    controller: 'DetailBeritaCtrl'
  })

  // Login
  .state('login', {
    url: '/login',
    cache: false,
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  // Menu template

  .state('menu', {
    url: '/menu',
    cache: false,
    abstract: true,
    templateUrl: function () {
      if(sessionStorage.getItem('login_userlevel') == '1') {
        return 'templates/admin/menu.html'
      }
      if(sessionStorage.getItem('login_userlevel') == '2') {
        return 'templates/siswa/menu.html'
      }
    }
  })

  .state('menu.dashboard', {
    url: '/dashboard',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: function () {
          if(sessionStorage.getItem('login_userlevel') == '1') {
            return 'templates/admin/dashboard.html'
          }
          if(sessionStorage.getItem('login_userlevel') == '2') {
            return 'templates/siswa/dashboard.html'
          }
        },
        controller: function () {
          if(sessionStorage.getItem('login_userlevel') == '1') {
            return 'AdminMainCtrl'
          }
          if(sessionStorage.getItem('login_userlevel') == '2') {
            return 'SiswaMainCtrl'
          }
        }
      }
    }
  })

  // Admin | Siswa

  .state('menu.siswa', {
    url: '/siswa',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/siswa-index.html',
        controller: 'SiswaCtrl'
      }
    }
  })

  .state('menu.siswa-create', {
    url : '/siswa-create',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/siswa-create.html',
        controller: 'SiswaCtrl'
      }
    }
  })

  .state('menu.siswa-update', {
    url: '/siswa-update/:siswaId',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/siswa-update.html',
        controller: 'SiswaCtrl'
      }
    }
  })

  // Admin | MatPel

  .state('menu.matpel', {
    url: '/matpel',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/matpel-index.html',
        controller: 'MatpelCtrl'
      }
    }
  })

  .state('menu.matpel-create', {
    url : '/matpel-create',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/matpel-create.html',
        controller: 'MatpelCtrl'
      }
    }
  })

  .state('menu.matpel-update', {
    url: '/matpel-update/:matpelId',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/matpel-update.html',
        controller: 'MatpelCtrl'
      }
    }
  })

  // Admin | Nilai

  .state('menu.nilai-siswa', {
    url: '/nilai-siswa',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/nilai-siswa-index.html',
        controller: 'NilaiCtrl'
      }
    }
  })

  .state('menu.nilai-matpel', {
    url: '/nilai-matpel/:siswaId',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/nilai-matpel-index.html',
        controller: 'NilaiCtrl'
      }
    }
  })

  .state('menu.nilai-create', {
    url: '/nilai-create/:siswaId',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/nilai-create.html',
        controller: 'NilaiCtrl'
      }
    }
  })

  .state('menu.nilai-update', {
    url: '/nilai-update/:siswaId/:matpelId',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/nilai-update.html',
        controller: 'NilaiCtrl'
      }
    }
  })

  // Siswa

  .state('menu.user-update-pass', {
    url: '/user-update-pass',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/siswa/update-password.html',
        controller: 'UserSiswaCtrl'
      }
    }
  })

  .state('menu.user-nilai', {
    url: '/user-nilai',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/siswa/nilai-index.html',
        controller: 'UserSiswaCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/front');
})