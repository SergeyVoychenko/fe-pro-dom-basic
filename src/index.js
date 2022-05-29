export const paintCards = () => {
    // мертвая коллукция
    let elements = document.querySelectorAll('ul > li:nth-child(odd)');
    for (let elem of elements) {
        elem.style.background = 'red';
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
    let elements = document.querySelectorAll('ul > li');
    for (let elem of elements) {
        if (elem.matches('.likedItem')) {
            elem.style.background = 'blue';
        }
    }
};
