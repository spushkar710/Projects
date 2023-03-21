//The querySelectorAll() method returns all elements that matches a CSS selector(s), in the form of NodeList.
const panels  = document.querySelectorAll('.panel');

// The forEach() method executes a provided function once for each array(node) element.
panels.forEach((panel) => {

    // When we click the image:
    // 1.removeActiveClasses is called, which remove all active classes.
    // 2.then the current clicked image(class) is made active. 
       panel.addEventListener('click', () => {                     //The addEventListener() method attaches an event handler to a document.     
        removeActiveClasses(); 
        panel.classList.add('active');                            //The classList property returns the CSS classnames of an element.
       })    
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
