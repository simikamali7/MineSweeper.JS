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

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let width = 10
    let squares = []
    let bombAmount = 20

    // Create Board Function
        // --> createElement method = creates a new html element representing each square (100 squares) --> This creates 100 divs
        // square.setAttribute creates a unique attribut for each square, with id as the new attribute, and i is matched up to the i index in the for loop.
        // then add each square html element into the grid constant, using appendChild method b/c adding it to dom Element of grid.
        // push each square element into to the empty squares array.
        // invoke the function once finished defining it.
    function createBoard() {
        // get shuffled game array with random bombs
            // Array method crates an array called bombAmount by passing in  the bombAmounts =20 variable, and then uses .fill() to change all the element's to "bomb" at each index.
            // empty array is doing the same thing except giving it a length of 80, and filling each square up with "valid".
            // then create a gameArray where we add the 2 arrays together using concat.
            // .sort sorts array by passing in an arrow function that performs the Math.random method on the array items.
        const bombArray =  Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('valid') 
        const gameArray = emptyArray.concat(bombArray)
        const shuffledArray = gameArray.sort(() => Math.random() -0.5)
       

// giving a className to square, by using .classList.add()
        for(let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)
        }


        // Adding the adjacent-bombs number feature --> display a number for each valid square, that indicates to user how many bombs are there in surrunding squares.
        // Edge Cases: game must know that if a square is on the edge of the grid, don't check for squaures that don't exist, if its the last one in that direction.
        // width = 10, eg: if i = 10 --> 10 % 10 gives remainder of 0.
        // isRightEdge --> divides i by width and if the remaineder is 9 b/c all the right edge column squares end with digit 9, then its a rightEdge sqaure.\
            // eg: 19 % width *10* = 10  with a remainder of 9, and width - 1 = 9, therefore it is a rightedge square.
        for (let i = 0; i <squares.length; i++) {
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width - 1)

        }
        
    }
    createBoard()



})



// TIPS/ERRORS MADE:
    // --> in "DOMContentLoaded", I wrote "DOMContentLoadeded" and the extra 'ed' at the end didn't allow this method to work, not allowing my js to run, or html to fully load.