const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()

})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    
    update()

})

/**
 * Main Function for the working of Step Progress Bar.
 */
function update(){
    circles.forEach((circle, idx) =>{          //! looping through each node(element) of circle class (there are 4). 
        
        /* Adding and removing active class based on currentActive value */
        if(idx < currentActive){
            circle.classList.add('active')     //! making classes active
        } 
        /** Example:
         * When currentActive = 3, circles[0], circles[1], circles[2] would become active.
         */
        
        else{
            circle.classList.remove('active')  //! removing active classes
        }
        /**Example:
         * When currentActive = 2, only circles[0], circles[1] would be active, circles[2],circles[3] would be removed from active, if they were active.
         * By default, circles[0] is always active, because we made it active in HTML.
         */
    })

    /** Selecting all the active nodes and making the progress line blue till there. */
    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length -1) / (circles.length-1)) * 100 + '%'


    /** For making Next and Prev enabled or diabled */
    if(currentActive === 1){
        prev.disabled = true   //! at the starting
    }

    else if(currentActive===circles.length){
        next.disabled = true   //! at the ending
    }

    else {                     //! at the middle
        prev.disabled = false
        next.disabled = false 
    }
}

