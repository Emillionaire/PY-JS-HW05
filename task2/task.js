const quantityClick = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')

img.onclick = () => {
    img.width = ++quantityClick.textContent % 2 ? 250 : 200
}