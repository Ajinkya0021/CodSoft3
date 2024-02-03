function clearScreen() {
    document.getElementById('screen').innerText = '0';
  }

  function appendToScreen(value) {
    const screen = document.getElementById('screen');
    if (screen.innerText === '0' && value !== '.') {
      screen.innerText = value;
    } else {
      screen.innerText += value;
    }
  }

  function backspace() {
    const screen = document.getElementById('screen');
    screen.innerText = screen.innerText.slice(0, -1);
    if (screen.innerText === '') {
      screen.innerText = '0';
    }
  }

  function calculate() {
    const screen = document.getElementById('screen');
    try {
      screen.innerText = eval(screen.innerText).toString();
    } catch (error) {
      screen.innerText = 'Error';
    }
  }