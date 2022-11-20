window.addEventListener('load', (event) => {
    const getElementById = document.getElementById('paragraph');
    const classListElement = document.getElementsByClassName('classListElement')[0];
    console.log(`Element by id: ${getElementById}`);
    console.log(`Query selector: ${document.querySelector('p')}`);
    console.log(`Query selector all: ${document.querySelectorAll('p')}`);
    console.log(`Get Elements By Class Name: ${document.getElementsByClassName('paragraph')[0]}`);
    console.log(`Get Elements by Tag Name: ${document.getElementsByTagName('p')}`);
    console.log('I added an event listener to the Window object on load to select the elements after they rendered on the DOM.');
    classListFunction();
    classListElement.addEventListener('mouseover', (event) => {
        classListElement.style.color = 'blue';
    });

    classListElement.addEventListener('mouseout', (event) => {
        classListElement.style.color = 'black';
    });
});

const onClickFunction = () => {
    const paragraphClassElement = document.getElementsByClassName('paragraph')[0];
    paragraphClassElement.style.color = 'red';

    appendToList();

    if (paragraphClassElement.style.display == 'none') {
        paragraphClassElement.style.display = 'block';
    }
    else {
        paragraphClassElement.style.display = 'none';
    }
}

const appendToList = () => {
    const list = document.getElementsByTagName('ul')[0];
    const listItem = document.createElement('li');
    const listContent = document.createTextNode('This is a new list item');
    listItem.appendChild(listContent);
    list.appendChild(listItem);
}

const classListFunction = () => {
    const classListElement = document.getElementsByClassName('classListElement')[0];
    console.log(`Class list: ${classListElement.classList}`);
    classListElement.classList.toggle('visible');
    console.log(`Class list toggle: toggled (added visible)`);
    classListElement.classList.add('hello');
    console.log(`Class 'hello' add: added`);
    classListElement.classList.remove('visible');
    console.log(`Class 'visible' remove: removed`);
}