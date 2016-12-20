var strPrompted = prompt('Введите произвольный текст');

var br = 0;

for (var i = 0; i < strPrompted.length; i++) {
  if (strPrompted[i] == '(' ) {
    br++;
  }
  if (strPrompted[i] == ')' ) {
    br--;
  }
}

  if (br > 0) {
  alert('Пропущено закрывающихся скобок: ' + br);
} else if (br < 0) {
  alert('Пропущено открывающихся скобок: ' + Math.abs(br) );
} else {
  alert('OK')
}
