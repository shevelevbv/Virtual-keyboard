class Key {
  constructor(en, ru, enShift, ruShift, code, isPrintable) {
    this.button = document.createElement('button');
    this.en = en;
    this.enShift = enShift;
    this.ru = ru;
    this.ruShift = ruShift;
    this.code = code;
    this.isPrintable = isPrintable;
  }

  appendKey(element) {
    this.button.classList.add('keyboard__key');
    element.append(this.button);
  }

  setTextLanguage(language) {
    if (language === 'en') {
      this.button.innerHTML = this.en;
    } else {
      this.button.innerHTML = this.ru;
    }
  }

  setShiftLetters(language) {
    if (language === 'en') {
      this.button.innerHTML = this.enShift;
    } else {
      this.button.innerHTML = this.ruShift;
    }
  }

  setCase(letterCase) {
    if (!this.isPrintable) {
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
let textAreaText = '';

function setLocalStorage() {
  localStorage.setItem('shevelevbvLang', language);
}

function getLocalStorage() {
  if (localStorage.getItem('shevelevbvLang')) {
    language = localStorage.getItem('shevelevbvLang');
  }
}

getLocalStorage();

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
text2.textContent = 'Для переключения языка используйте комбинацию: Ctrl + Alt (левый или правый)';
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard__keys');
const enLetters = [
  '§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#x25B2;', 'Shift',
  'Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', '&#x25C0;', '&#x25BC;', '&#x25B6;', 'Alt'];

const enShift = [
  '±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '|', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&#x25B2;', 'Shift',
  'Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', '&#x25C0;', '&#x25BC;', '&#x25B6;', 'Alt'];

const ruLetters = [
  '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', '&#x25B2;', 'Shift',
  'Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', '&#x25C0;', '&#x25BC;', '&#x25B6;', 'Alt'];

const ruShift = [
  '`', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', '&#x25B2;', 'Shift',
  'Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', '&#x25C0;', '&#x25BC;', '&#x25B6;', 'Alt'];

const code = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeaft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'AltRight'];

const isPrintable = [
  true, true, true, true, true, true, true, true, true, true, true, true, true, false,
  false, true, true, true, true, true, true, true, true, true, true, true, true, true, false,
  false, true, true, true, true, true, true, true, true, true, true, true, false,
  false, true, true, true, true, true, true, true, true, true, true, true, false,
  false, false, false, true, false, true, true, true, false];

const keys = [];
let row = document.createElement('div');
row.classList.add('keyboard__row');

for (let i = 0; i < enLetters.length; i += 1) {
  const key = new Key(enLetters[i], ruLetters[i], enShift[i], ruShift[i], code[i], isPrintable[i]);
  key.setTextLanguage(language);
  keys.push(key);
  key.appendKey(row);
  if (i === 13 || i === 28 || i === 41 || i === 54 || i === enLetters.length - 1) {
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
const rightAltKey = keys[63];
rightAltKey.button.classList.add('keyboard__key--functional');

document.body.append(bodyWrapper);

capsLockKey.button.addEventListener('click', () => {
  capsLockKey.button.classList.toggle('keyboard__key--pressed');
});

keys.forEach((key) => {
  key.button.addEventListener('click', () => {
    if (key.isPrintable) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const textStart = textAreaText.substring(0, start);
      const newText = key.button.textContent;
      const textEnd = textAreaText.substring(end, textAreaText.length);
      textAreaText = textStart + newText + textEnd;
      textArea.value = textAreaText;
      textArea.setSelectionRange(start + 1, start + 1);
    } else if (key === delKey) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const textStart = textAreaText.substring(0, start);
      const textEnd = textAreaText.substring(end + 1, textAreaText.length);
      textAreaText = textStart + textEnd;
      textArea.value = textAreaText;
      textArea.setSelectionRange(start, start);
    } else if (key === capsLockKey) {
      if (lowerCase) {
        keys.forEach((button) => button.setCase('upper'));
        lowerCase = false;
      } else {
        keys.forEach((button) => button.setCase('lower'));
        lowerCase = true;
      }
    } else if (key === backSpaceKey) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      if (start > 0) {
        const textStart = textAreaText.substring(0, start - 1);
        const textEnd = textAreaText.substring(end, textAreaText.length);
        textAreaText = textStart + textEnd;
        textArea.value = textAreaText;
        textArea.setSelectionRange(start - 1, start - 1);
        textArea.value = textAreaText;
      }
    } else if (key === enterKey) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const textStart = textAreaText.substring(0, start);
      const newText = '\n';
      const textEnd = textAreaText.substring(end, textAreaText.length);
      textAreaText = textStart + newText + textEnd;
      textArea.value = textAreaText;
      textArea.setSelectionRange(start + 1, start + 1);
    } else if (key === tabKey) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const textStart = textAreaText.substring(0, start);
      const newText = '\t';
      const textEnd = textAreaText.substring(end, textAreaText.length);
      textAreaText = textStart + newText + textEnd;
      textArea.value = textAreaText;
      textArea.setSelectionRange(start + 1, start + 1);
    } else if (key === arrowLeftKey) {
      const start = textArea.selectionStart;
      if (start !== 0) {
        textArea.setSelectionRange(start - 1, start - 1);
      }
    } else if (key === arrowRightKey) {
      const start = textArea.selectionStart;
      if (start !== textArea.value.length) {
        textArea.setSelectionRange(start + 1, start + 1);
      }
    }
    textArea.focus();
    if (key !== capsLockKey) {
      key.button.classList.add('keyboard__key--pressed');
      key.button.addEventListener('animationend', () => {
        key.button.classList.remove('keyboard__key--pressed');
      });
    }
  });
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const keyCode = event.code;
  if (keyCode === 'ControlLeft') {
    leftCtrlKey.button.classList.add('keyboard__key--pressed');
  } else if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    if (keyCode === 'AltLeft') {
      leftAltKey.button.classList.add('keyboard__key--pressed');
    } else if (keyCode === 'AltRight') {
      rightAltKey.button.classList.add('keyboard__key--pressed');
    }
  } else if (keyCode === 'Backspace') {
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    if (start > 0) {
      const textStart = textAreaText.substring(0, start - 1);
      const textEnd = textAreaText.substring(end, textAreaText.length);
      textAreaText = textStart + textEnd;
      textArea.value = textAreaText;
      textArea.setSelectionRange(start - 1, start - 1);
      textArea.value = textAreaText;
    }
    backSpaceKey.button.classList.add('keyboard__key--pressed');
  } else if (keyCode === 'Enter') {
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const textStart = textAreaText.substring(0, start);
    const newText = '\n';
    const textEnd = textAreaText.substring(end, textAreaText.length);
    textAreaText = textStart + newText + textEnd;
    textArea.value = textAreaText;
    textArea.setSelectionRange(start + 1, start + 1);
    enterKey.button.classList.add('keyboard__key--pressed');
  } else if (keyCode === 'Tab') {
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const textStart = textAreaText.substring(0, start);
    const newText = '\t';
    const textEnd = textAreaText.substring(end, textAreaText.length);
    textAreaText = textStart + newText + textEnd;
    textArea.value = textAreaText;
    textArea.setSelectionRange(start + 1, start + 1);
    tabKey.button.classList.add('keyboard__key--pressed');
  } else if (keyCode === 'CapsLock') {
    if (lowerCase) {
      keys.forEach((button) => button.setCase('upper'));
      lowerCase = false;
    } else {
      keys.forEach((button) => button.setCase('lower'));
      lowerCase = true;
    }
    capsLockKey.button.classList.toggle('keyboard__key--pressed');
  } else if (keyCode === 'Delete') {
    delKey.button.classList.add('keyboard__key--pressed');
  } else if (keyCode === 'MetaLeft' || keyCode === 'MetaRight') {
    if (keyCode === 'MetaLeft') {
      leftCmdKey.button.classList.add('keyboard__key--pressed');
    } else {
      rightCmdKey.button.classList.add('keyboard__key--pressed');
    }
  } else if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    if (keyCode === 'ShiftLeft') {
      leftShiftKey.button.classList.add('keyboard__key--pressed');
    } else {
      rightShiftKey.button.classList.add('keyboard__key--pressed');
    }
    keys.forEach((key) => key.setShiftLetters(language));
    if (lowerCase) {
      keys.forEach((button) => button.setCase('upper'));
      lowerCase = false;
    } else {
      keys.forEach((button) => button.setCase('lower'));
      lowerCase = true;
    }
  } else if (code.includes(keyCode)) {
    const selectedKey = keys.filter((key) => key.code === keyCode);
    selectedKey[0].button.classList.add('keyboard__key--pressed');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const textStart = textAreaText.substring(0, start);
    const newText = selectedKey[0].button.textContent;
    const textEnd = textAreaText.substring(end, textAreaText.length);
    textAreaText = textStart + newText + textEnd;
    textArea.value = textAreaText;
    textArea.setSelectionRange(start + 1, start + 1);
  }

  if (event.ctrlKey && event.altKey) {
    if (language === 'en') {
      language = 'ru';
    } else {
      language = 'en';
    }
    keys.forEach((button) => {
      button.setTextLanguage(language);
      if (capsLockKey.button.classList.contains('keyboard__key--pressed')) {
        keys.forEach((keyboardButton) => keyboardButton.setCase('upper'));
      }
    });
  }
  textArea.focus();
});

document.addEventListener('keyup', (event) => {
  const keyCode = event.code;
  if (keyCode === 'ControlLeft') {
    leftCtrlKey.button.classList.remove('keyboard__key--pressed');
  } else if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    if (keyCode === 'AltLeft') {
      leftAltKey.button.classList.remove('keyboard__key--pressed');
    } else if (keyCode === 'AltRight') {
      rightAltKey.button.classList.remove('keyboard__key--pressed');
    }
  } else if (keyCode === 'Backspace') {
    backSpaceKey.button.classList.remove('keyboard__key--pressed');
  } else if (keyCode === 'Enter') {
    enterKey.button.classList.remove('keyboard__key--pressed');
  } else if (keyCode === 'Tab') {
    tabKey.button.classList.remove('keyboard__key--pressed');
  } else if (keyCode === 'Delete') {
    delKey.button.classList.remove('keyboard__key--pressed');
  } else if (keyCode === 'MetaLeft' || keyCode === 'MetaRight') {
    if (keyCode === 'MetaLeft') {
      leftCmdKey.button.classList.remove('keyboard__key--pressed');
    } else {
      rightCmdKey.button.classList.remove('keyboard__key--pressed');
    }
  } else if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    if (keyCode === 'ShiftLeft') {
      leftShiftKey.button.classList.remove('keyboard__key--pressed');
    } else {
      rightShiftKey.button.classList.remove('keyboard__key--pressed');
    }
    keys.forEach((key) => key.setTextLanguage(language));
    if (lowerCase) {
      keys.forEach((button) => button.setCase('upper'));
      lowerCase = false;
    } else {
      keys.forEach((button) => button.setCase('lower'));
      lowerCase = true;
    }
  } else if (code.includes(keyCode) && keyCode !== 'CapsLock') {
    const selectedKey = keys.filter((key) => key.code === keyCode);
    selectedKey[0].button.classList.remove('keyboard__key--pressed');
  }
});

window.addEventListener('beforeunload', setLocalStorage);
