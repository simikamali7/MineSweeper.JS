// using recursion to check each neighbouring tile, of a select tile, for mines,
//  --> same logic/recursion can be used to search neighbouring stores etc... 
//  functions: click(square) --> check the swaure of a bomb
    // --> also check a neighbouring square for mines.

// Rules of the game: click on the squares, and finding all the mines in the board, without actually clicking on a mine.
// if click on empty square, if next to bombs, that square will reveal the total number of bombs surrounding it with a number, in surrounding squares.
// if not a bomb, or surrounded by bombs, find other squares. 
// if click on a bomb, game over.
// win by placing flags on squares you suspect are bombs.

// Important JS array methods being used: .fill(), and .array()


// add dom event listener to file, so that all our html content is loaded before js file is run.
// writing all our js code in the function body of the event listener.
    // --> can alternativaley place script tag at the bottom of our html file, which also ensures all our html is loaded before js file is run.
// const - doesnt change
// grid = 10 squares width

// empty array of squares, and push square elements into it.

document.addEventListener('DOMContentLoadeded', () => {
    const grid = document.querySelector('.grid')
    let width = 10
    let squares = []

    // Create Board Function
        // --> createElement method = creates a new html element representing each square (100 squares) --> This creates 100 divs
        // square.setAttribute creates a unique attribut for each square, with id as the new attribute, and i is matched up to the i index in the for loop.
        // then add each square html element into the grid constant, using appendChild method b/c adding it to dom Element of grid.
        // push each square element into to the empty squares array.
        // invoke the function once finished defining it.
    function createBoard() {
        for(let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()


})