const quantityClick = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')
let switcher = false


img.onclick = () => {
    quantityClick.textContent = Number(quantityClick.textContent) + 1
    if (switcher) {
        img.width -= 50
        img.height -= 50
        switcher = false
    } else {
        img.width += 50
        img.height += 50
        switcher = true
    }
}