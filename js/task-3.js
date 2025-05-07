const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  const name = inputEl.value.trim();
  outputEl.textContent = name === '' ? 'Anonymous' : name;
});
