const timerStart = document.getElementById('timer')

let timer = setInterval(() => {
    if (timerStart.textContent == 0) {
        alert('You won in competition!')
        clearTimeout(timer)
    } else {
        timerStart.textContent = Number(timerStart.textContent) - 1
    }
},1)