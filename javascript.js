var strPrompted = prompt('Введите произвольный текст');

var brOpen = 0;
var brClosed = 0;

for (var i = 0; i < strPrompted.length; i++) {
  if (strPrompted[i] == '(' ) {
    brOpen += 1;
  }
  if (strPrompted[i] == ')' ) {
    brClosed += 1;
  }
}

  if (brOpen > brClosed) {
  alert('Пропущено закрывающихся скобок: ' + (brOpen - brClosed) );
} else if (brClosed > brOpen) {
  alert('Пропущено открывающихся скобок: ' + (brClosed - brOpen) );
} else {
  alert('OK')
}
