const digit1 = document.getElementById('digit1');
const digit2 = document.getElementById('digit2');
const digit3 = document.getElementById('digit3');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
    const password = `${digit1.value}${digit2.value}${digit3.value}`;

    if (password === '911') {
        result.textContent = 'Password 1 correcto';
        result.style.color = 'green';
    } else if (password === '714') {
        result.textContent = 'Password 2 es correcto';
        result.style.color = 'green';
    } else {
        result.textContent = 'Password incorrecto';
        result.style.color = 'red';
    }
});