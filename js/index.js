
const btn = document.querySelector('#buttonText');
btn.addEventListener('click', () => {
    
    const input = document.querySelector('#inputText');
    localStorage.inputText = input.value;
    
})
