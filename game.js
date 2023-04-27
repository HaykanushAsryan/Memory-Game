function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function checkImages(images) {
    // const first = images[0]
    // const second = images[1]

    const [first, second] = images
    if (first.img === second.img) {
        first.html.style.border = 'solid'
        second.html.style.border = 'solid'
    } else {
        setTimeout(() => {
            first.html.style.display = 'none'
            second.html.style.display = 'none'
        }, 500)
    }
}


const gameBox = document.querySelector(".gameBox")
const boxes = document.querySelectorAll(".box")


const images = shuffle([
    "./img/Chandler.webp",
    "./img/friends.jpg",
    "./img/Joey.webp",
    "./img/Monica.webp",
    "./img/Phoebe.webp",
    "./img/rachel.jpg",
    "./img/Chandler.webp",
    "./img/friends.jpg",
    "./img/Joey.webp",
    "./img/Monica.webp",
    "./img/Phoebe.webp",
    "./img/rachel.jpg"
])

let selectedImg = []

Array.from(boxes).forEach((div, i) => {
    const img = document.createElement('img')
    img.src = images[i]
    div.append(img)
    img.classList.add("img")
    div.classList.add("box")

    div.onclick = () => {

        img.style.display = "block"

        selectedImg.push({
            img: images[i],
            i: i,
            html: img
        })

        if (selectedImg.length === 2) {
            checkImages(selectedImg)
            selectedImg = []
        }
    }
})

