const turnAndOff = () => {
    const button = document.querySelectorAll('button')
    const span = document.querySelectorAll('span')

    for (let i= 0; i < button.length; i++){
        button[i].onclick = () => {
            span[i].classList.toggle('visible');
            button[i].textContent = button[i].textContent.includes('Показать ответ')
                ? 'Скрыть ответ'
                : 'Показать ответ'
        }

    }
}
turnAndOff()