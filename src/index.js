export const paintCards = () => {
    let elements = document.querySelectorAll('ul > li:nth-child(odd)');
    for (let elem of elements) {
        elem.style.background = 'red';
    }
};

export const findElement = () => {
    let elements = document.querySelectorAll('ul > li');
    for (let elem of elements) {
        if (elem.matches('.likedItem')) {
            elem.style.background = 'blue';
        }
    }
};
