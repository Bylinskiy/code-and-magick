'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT = 4;

function getRandomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getWizardName() {
  var wizardName = NAMES[getRandomInteger(0, NAMES.length - 1)] + ' ' + SURNAMES[getRandomInteger(0, SURNAMES.length - 1)];
  return wizardName;
}

function getWizardCoatColor() {
  var wizardColor = COAT_COLOR[getRandomInteger(0, COAT_COLOR.length - 1)];
  return wizardColor;
}

function getWizardEyesColor() {
  var wizardColor = EYES_COLOR[getRandomInteger(0, EYES_COLOR.length - 1)];
  return wizardColor;
}

function getWizardFireballColor() {
  var wizardColor = FIREBALL_COLOR[getRandomInteger(0, FIREBALL_COLOR.length - 1)];
  return wizardColor;
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getWizardName();
  wizardElement.querySelector('.wizard-coat').style.fill = getWizardCoatColor();
  wizardElement.querySelector('.wizard-eyes').style.fill = getWizardEyesColor();
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < COUNT; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var MIN_NAME_LENGTH = 2;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});


var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  var target = evt.target;
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Это поле обязательно для заполнения');
  } else if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов'
    );
  } else {
    userNameInput.setCustomValidity('');
  }
});

var fireballSetup = document.querySelector('.setup-fireball-wrap');
var wizardCoatSetup = document.querySelector('.wizard-coat');
var wizardEyesSetup = document.querySelector('.wizard-eyes');
var fireballValue = document.querySelector('input[name="fireball-color"]');
var wizardCoatValue = document.querySelector('input[name="coat-color"]');
var wizardEyesValue = document.querySelector('input[name="eyes-color"]');


fireballSetup.addEventListener('click', function (evt) {
  var color = getWizardFireballColor();
  fireballSetup.style.background = color;
  fireballValue.value = color;
});

wizardCoatSetup.addEventListener('click', function (evt) {
  var color = getWizardCoatColor();
  wizardCoatSetup.style.fill = color;
  wizardCoatValue.value = color;
});

wizardEyesSetup.addEventListener('click', function (evt) {
  var color = getWizardEyesColor();
  wizardEyesSetup.style.fill = color;
  wizardEyesValue.value = color;
});
