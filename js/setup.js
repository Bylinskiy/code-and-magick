'use strict';

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT = 4;

function getColor(element) {
  var wizardColor = element[window.util.getRandomInteger(0, element.length - 1)];
  return wizardColor;
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
  return wizardElement;
};

var successHandler = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < COUNT; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');
};

var errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

window.backend.load(successHandler, errorHandler);


var fireballSetup = document.querySelector('.setup-fireball-wrap');
var wizardCoatSetup = document.querySelector('.wizard-coat');
var wizardEyesSetup = document.querySelector('.wizard-eyes');
var fireballValue = document.querySelector('input[name="fireball-color"]');
var wizardCoatValue = document.querySelector('input[name="coat-color"]');
var wizardEyesValue = document.querySelector('input[name="eyes-color"]');


fireballSetup.addEventListener('click', function () {
  var color = getColor(FIREBALL_COLOR);
  fireballSetup.style.background = color;
  fireballValue.value = color;
});

wizardCoatSetup.addEventListener('click', function () {
  var color = getColor(COAT_COLOR);
  wizardCoatSetup.style.fill = color;
  wizardCoatValue.value = color;
});

wizardEyesSetup.addEventListener('click', function () {
  var color = getColor(EYES_COLOR);
  wizardEyesSetup.style.fill = color;
  wizardEyesValue.value = color;
});

var form = document.querySelector('.setup-wizard-form');
form.addEventListener('submit', function (evt) {
  window.backend.save(new FormData(form), function () {
    window.dialog.setup.classList.add('hidden');
  });
  evt.preventDefault();
});
