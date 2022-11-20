const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

library.forEach(object => console.log(`Book title: ${object.title.toUpperCase()}\nBook author: ${object.author.toUpperCase()}\nReading status: ${object.readingStatus.toString().toUpperCase()}`));