export const paintCards = () => {
    // мертвая коллукция
    let elements = document.querySelectorAll('ul > li:nth-child(odd)');
    for (let elem of elements) {
        elem.style.backgroundColor = 'red';
    }
    //  живая коллекция
    // let elements = document.getElementsByClassName('item');
    // for (let i = 0; i < elements.length; i++) {
    //     if (i% 2 == 0) {
    //         elements[i].style.background = 'red';
    //     }
    // }
};

export const findElement = () => {
    let element = document.querySelector('ul > li');
    for (; ;) {
        if (element.matches('.likedItem')) {
            element.style.backgroundColor = 'blue';
            element = element.nextElementSibling;
        } else {
            element = element.nextElementSibling;
            if (element === element.parentElement.lastElementChild) break;
        }
    }
};
