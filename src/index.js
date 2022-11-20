window.addEventListener('load', () => {
    const title = document.getElementsByTagName('h1')[0];
    const time = document.getElementsByTagName('time')[0];
    type(title);
    addTime(time);
});

const type = (element) => {
    const text = "Vince's Web Programming Assignments Fall 2022";

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => element.innerHTML += text[i], 75 * i);
    };
};

const addTime = (element) => {
    const date = new Date();
    element.innerHTML = date;
    element.style.color = 'black';
    element.style.opacity = '0.5';
    element.style.marginTop = '3rem';
    element.style.fontFamily = 'Lexend';
}