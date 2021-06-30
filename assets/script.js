let a = 2;
let anime = 1
setInterval(() => {
    $('.flag').forEach((element) => {
        //element.classList.add('anime-' + a);
        element.style = `animation: anime-flag-${anime} ${a}s infinite alternate 0s`
        a++
        anime++;
        if (a > 5) {
            a = 3
        }
        if (anime > 6) {
            anime = 1;
        }
    })
    a = 2;
}, '7000')

function $(selector) {
    return document.querySelectorAll(selector)
}