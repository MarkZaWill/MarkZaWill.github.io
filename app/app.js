"use strict";

/* exported PersonalSite */

let PersonalSite = angular.module("PersonalSite", ["ngRoute"]);





/*
  Set up routes for the app
 */
PersonalSite.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.

      when("/", {
        templateUrl: "partials/Welcome.html",
         // controller: "WelcomeController"
      }).
      when("/psych", {
        templateUrl: "partials/Psychology.html",
        // controller: "LoginCtrl"
      }).
      when("/dev", {
        templateUrl: "partials/Developer.html",
        // controller: "LoginCtrl"
      }).
      when("/about", {
        templateUrl: "partials/AboutMe.html",
        // controller: "LoginCtrl"
      }).
      when("/current", {
        templateUrl: "partials/blog.html",

      }).  
      otherwise({
        redirectTo: "/"
      });
  }]);