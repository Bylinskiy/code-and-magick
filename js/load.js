'use strict';
(function () {
  var URL = 'https://21.javascript.pages.academy/code-and-magick/data';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  window.load = function (onSuccsess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccsess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS; // 10s

    xhr.open('GET', URL);
    xhr.send();
  };
})();
