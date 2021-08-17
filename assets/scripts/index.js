
// Selectors
const inputArea = document.getElementById('input-area');
const countBtn = document.getElementById('btn-count');
const countDisplay = document.getElementById('count-display');

// Listening to a 'click' event
countBtn.addEventListener('click', () => {
    const wordCount = inputArea.value.split(' ').length;
    countDisplay.innerHTML = wordCount;
});