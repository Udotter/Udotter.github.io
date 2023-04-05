const form = document.querySelector('form');
const input = document.querySelector('input[name="message"]');
const messages = document.querySelectorAll('p');

form.addEventListener('click', (event) => {
  event.preventDefault();
  const message = input.value;
  if (message !== '') {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      if (data.success) {
        input.value = '';
        messages.forEach((message) => {
          message.remove();
        });
        data.messages.forEach((message) => {
          const p = document.createElement('p');
          p.textContent = message;
          document.body.appendChild(p);
        });
      }
    };
    xhr.send(JSON.stringify({ message }));
  }
});
