"use strict";
var page = require('webpage').create();
page.open('https://github.com/login', function(status) {

  page.onLoadFinished = function() {
    page.render("after_submit.png");
    phantom.exit();
  };

  page.evaluate(function() {
    document.querySelector('input[name=login]').value = 'ishitanm';
    document.querySelector('input[name=password]').value = 'TestISN2017';
    document.querySelector('input[type=submit]').click();
  });
  page.render("output.png");

});
