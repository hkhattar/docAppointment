var app = angular.module('app', ['ngRoute','ngCookies']);



app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!

$routeProvider
       
        .when('/new_appointment',{
          templateUrl: 'partials/new_appointment.html',
          controller: 'appointment_controller'

        })

        .when('/',{
          templateUrl: 'partials/login_page.html',
          controller:'user_controller',

        })

        .when('/dashboard',{
          templateUrl: 'partials/dashboard.html',
          controller:'dashboard_controller',

        })
        

});