function checkPassword(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    if (password === 'Jesuslovesu') {
      window.location.href = 'ind.html';
    } else {
      message.innerText = 'Incorrect password. Please try again.';
    }
  }
  