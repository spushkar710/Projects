const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText 
    // The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, 
    // puts these substrings into an array, and returns the array.
    .split('') 

    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    .map((letter, idx)=> `<span style="transition-delay:${idx * 30}ms">${letter}</span>`) // The ${} syntax allows us to put an expression in it and it will produce the value

    //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
    //separated by commas or a specified separator string. 
    .join('')
})