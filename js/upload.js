'use strict';
(function () {
  var URL = 'https://21.javascript.pages.academy/code-and-magick';

  window.upload = function (data, onSuccsess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccsess(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
