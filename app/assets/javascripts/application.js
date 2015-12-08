// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require_self
//= require_tree .

var photoBoothApp = angular.module('photoBooth', ['ui.bootstrap', 'ngRoute'])

photoBoothApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/picture_sets.html',
      controller: 'MainCtrl'
    }).
    when('/picture_set/:pictureSetId', {
      templateUrl: 'partials/picture_set.html',
      controller: 'PictureSetCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
