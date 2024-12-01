const sticker1 = document.getElementById('sticker1');
const sticker2 = document.getElementById('sticker2');
const sticker3 = document.getElementById('sticker3');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const count1 = parseInt(sticker1.value) || 0;
    const count2 = parseInt(sticker2.value) || 0;
    const count3 = parseInt(sticker3.value) || 0;

    const total = count1 + count2 + count3;

    if (total <= 10) {
        result.textContent = `Llevas ${total} stickers.`;
        result.style.color = 'green';
    } else {
        result.textContent = 'Llevas demasiados stickers.';
        result.style.color = 'red';
    }
});
