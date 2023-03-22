const wrapper = document.querySelector('.wrapper')
const rank_images = ['jack', 'queen', 'king', 'tuz']
const suit_images = ['clubs', 'spades', 'diamonds', 'hearts']

for (let i = 2; i < 15; i++) {
    for (let j = 0; j < 4; j++) {
        let obj = {
            rank: i > 10 ? rank_images[i - 11].charAt(0).toUpperCase() : i,
            suit: suit_images[j],
            rank_pic: i > 10 ? i == 14 ? suit_images[j] : rank_images[i - 11] : i
        }

        wrapper.insertAdjacentHTML('beforeend', cardTemplate(obj))
    }
}

function cardTemplate({ rank, suit, rank_pic }) {
    const image = typeof rank == "number" && isFinite(rank) ? '' : `<img class="person" src="images/${rank_pic}.svg" alt="${suit}">`
    return `<div class="card">
        <div class="card__info">${rank}<img src="images/${suit}.svg" alt="${suit}"></div>
        ${image}
        <div class="card__info">${rank}<img src="images/${suit}.svg" alt="${suit}"></div>
    </div>`
}