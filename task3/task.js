const quantityHit = document.getElementById('dead')
const quantityMiss = document.getElementById('lost')
const last = document.getElementById('last')
var hole = []

getHole = index => document.getElementById(`hole${index}`);

restart = () => hit = miss = quantityHit.textContent = quantityMiss.textContent = 0;
restart()

win = (q) => q ? (alert('You win!'), restart()) : (alert('You lose!'), restart())

for (let i = 1; i < 10; i++) {
    hole['hole' + i] = getHole(i)
    hole['hole' + i].onclick = () => {
        last.textContent = i
        if (hole['hole' + i].classList.contains( 'hole_has-mole' )) {
            quantityHit.textContent = Number(quantityHit.textContent) + 1
            hit += 1
            if (hit == 10) {
                win(true)
            }
        } else {
            quantityMiss.textContent = Number(quantityMiss.textContent) + 1
            miss += 1
            if (miss == 5) {
                win(false)
            }
        }
    }
};