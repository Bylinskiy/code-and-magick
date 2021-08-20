'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT = 4;

function getWizardName() {
  var wizardName = NAMES[window.util.getRandomInteger(0, NAMES.length - 1)] + ' ' + SURNAMES[window.util.getRandomInteger(0, SURNAMES.length - 1)];
  return wizardName;
}

function getColor(element) {
  var wizardColor = element[window.util.getRandomInteger(0, element.length - 1)];
  return wizardColor;
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getWizardName();
  wizardElement.querySelector('.wizard-coat').style.fill = getColor(COAT_COLOR);
  wizardElement.querySelector('.wizard-eyes').style.fill = getColor(EYES_COLOR);
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < COUNT; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

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
