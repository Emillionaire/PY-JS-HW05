const timerStart = document.getElementById('timer')

setInterval(() => {
    if (timerStart.textContent == 0) {
        alert('You won in competition!')
    } else {
        timerStart.textContent = Number(timerStart.textContent) - 1
    }
},1000)