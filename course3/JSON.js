// store JSON data in JS variable as string
var book_as_string = '{ "title": "a tale of two cities", "author": "charles dickens", "pages": 350, "available": true }'

// converting String to JS object
var book = JSON.parse(book_as_string);

// access the properties of object
console.log(book);
console.log(book.available);

// json is used for sending data from server to browser or back forth
