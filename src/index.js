class Key {
  constructor(en, ru, changeCase) {
    this.button = document.createElement('button');
    this.en = en;
    this.ru = ru;
    this.language = 'en';
    this.changeCase = changeCase;
  }

  appendKey(element) {
    this.button.classList.add('keyboard__key');
    this.setTextLanguage(this.language);
    element.append(this.button);
  }

  setLanguage(language) {
    this.language = language;
  }

  setTextLanguage(language) {
    if (language === 'en') {
      this.button.innerHTML = this.en;
    } else {
      this.button.innerHTML = this.ru;
    }
  }

  setCase(letterCase) {
    if (this.changeCase === false) {
      return;
    }
    if (letterCase === 'lower') {
      this.button.innerHTML = this.button.innerHTML.toLowerCase();
    } else {
      this.button.innerHTML = this.button.innerHTML.toUpperCase();
    }
  }
}

let language = 'en';
let lowerCase = true;

function setLocalStorage() {
  localStorage.setItem('shevelevbvLang', language);
}

function getLocalStorage() {
  if (localStorage.getItem('shevelevbvLang')) {
    language = localStorage.getItem('shevelevbvLang');
  }
}

window.addEventListener('load', getLocalStorage);

const bodyWrapper = document.createElement('div');
bodyWrapper.classList.add('body-wrapper');
const title = document.createElement('h1');
title.textContent = 'RSS Virtual Keyboard';
const textArea = document.createElement('textarea');
textArea.name = 'text-input';
textArea.id = 'text-input';
textArea.cols = '70';
textArea.rows = '10';
textArea.autofocus = 'autofocus';
const text1 = document.createElement('p');
text1.textContent = 'Клавиатура создана в операционной системе macOS';
const text2 = document.createElement('p');
text2.textContent = 'Для переключения языка используйте комбинацию: Cmd + Space';
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard__keys');
const keyboardEnLetters = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#x25B2;', 'Shift',
  'Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', '&#x25C0;', '&#x25BC;', '&#x25B6;', 'Ctrl'];

const keyboardRuLetters = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', '&#25B2;', 'Shift',
  'Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', '&#25C0;', '&#25BC;', '&#25B6;', 'Ctrl'];

const keyboardChangeCase = [
  true, false, false, false, false, false, false, false, false, false, false, false, false, false,
  false, true, true, true, true, true, true, true, true, true, true, true, true, false, false,
  false, true, true, true, true, true, true, true, true, true, true, true, false,
  false, true, true, true, true, true, true, true, true, true, false, false, false,
  false, false, false, false, false, false, false, false, false];

const keys = [];
let row = document.createElement('div');
row.classList.add('keyboard__row');
for (let i = 0; i < keyboardEnLetters.length; i += 1) {
  const key = new Key(keyboardEnLetters[i], keyboardRuLetters[i], keyboardChangeCase[i]);
  keys.push(key);
  key.appendKey(row);
  if (i === 13 || i === 28 || i === 41 || i === 54 || i === keyboardEnLetters.length - 1) {
    keyboardKeys.append(row);
    row = document.createElement('div');
    row.classList.add('keyboard__row');
  }
}

keyboard.append(keyboardKeys);
bodyWrapper.append(title, textArea, keyboard, text1, text2);

const backSpaceKey = keys[13];
backSpaceKey.button.classList.add('keyboard__key--backspace', 'keyboard__key--functional');
const tabKey = keys[14];
tabKey.button.classList.add('keyboard__key--tab', 'keyboard__key--functional');
const delKey = keys[28];
delKey.button.classList.add('keyboard__key--functional');
const capsLockKey = keys[29];
capsLockKey.button.classList.add('keyboard__key--wide', 'keyboard__key--functional');
const enterKey = keys[41];
enterKey.button.classList.add('keyboard__key--functional', 'keyboard__key--wider');
const leftShiftKey = keys[42];
leftShiftKey.button.classList.add('keyboard__key--functional', 'keyboard__key--wide');
const arrowUpKey = keys[53];
arrowUpKey.button.classList.add('keyboard__key--functional');
const rightShiftKey = keys[54];
rightShiftKey.button.classList.add('keyboard__key--functional', 'keyboard__key--wider');
const leftCtrlKey = keys[55];
leftCtrlKey.button.classList.add('keyboard__key--functional');
const leftAltKey = keys[56];
leftAltKey.button.classList.add('keyboard__key--functional');
const leftCmdKey = keys[57];
leftCmdKey.button.classList.add('keyboard__key--functional');
const SpaceKey = keys[58];
SpaceKey.button.classList.add('keyboard__key--functional', 'keyboard__key--space');
const rightCmdKey = keys[59];
rightCmdKey.button.classList.add('keyboard__key--functional');
const arrowLeftKey = keys[60];
arrowLeftKey.button.classList.add('keyboard__key--functional');
const arrowDownKey = keys[61];
arrowDownKey.button.classList.add('keyboard__key--functional');
const arrowRightKey = keys[62];
arrowRightKey.button.classList.add('keyboard__key--functional');
const rightCtrlKey = keys[62];
rightCtrlKey.button.classList.add('keyboard__key--functional');

document.body.append(bodyWrapper);

capsLockKey.button.addEventListener('click', () => {
  if (lowerCase) {
    keys.forEach((key) => key.setCase('upper'));
    lowerCase = false;
  } else {
    keys.forEach((key) => key.setCase('lower'));
    lowerCase = true;
  }
  capsLockKey.button.classList.toggle('keyboard__key--pressed');
});

window.addEventListener('beforeUnload', setLocalStorage);
