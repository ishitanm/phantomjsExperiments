#!/usr/bin/env phantomjs
"use strict";

var page = require('webpage').create();
page.open('https://github.com/login', function() {
  var system = require('system');
  var env = system.env;
  var username, password;
  username = env["Login"];
  password = env["Password"];
  console.log("inside " + password);

  page.onLoadFinished = function() {
    page.render("after_submit.png");
    phantom.exit();
  };

  page.evaluate(function(username, password) {
    //console.log("inside");

    document.querySelector('input[name=login]').value = username;
    document.querySelector('input[name=password]').value = password;
    document.querySelector('input[type=submit]').click();
  }, username, password);

  page.render("output.png");
  // phantom.exit();
});
