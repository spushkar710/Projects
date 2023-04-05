const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(bluring, 30)      //!increases the value of load every 30ms.

function bluring() {
    load++

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`     //! `` -> template literals, ${} -> Placeholders
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//function to map a range of numbers to another range of numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}