document.addEventListener('DOMContentLoaded', () => {
    const datos = document.querySelector('#data');
    const getData = localStorage.getItem("inputText")

    if (getData) {
        datos.textContent = `${getData}`
    }
})