let persons = ['Clint', 'Wsytan', 'Andrew', 'Iris'];

// JQuery
$(document).ready(function () {
    let btnJquery = $('#btn_jquery');
    let list = $('#list');
    let header = $('#header');

    $('#btn_jquery').on('click', function () {
        // list.append('<li>Jquery list Item</li>').css('font-size', '30px');
        // header.toggleClass('blink');

        $.each(persons, function (index, item) {
            list.append(`<li>${item}</li>`).css('font-size', '30px');
        });
    });
});

// ES6
document.addEventListener('DOMContentLoaded', () => {
    let btnES6 = document.querySelector('#btn_es6');
    let header = document.querySelector('#header');

    let html = '';
    btnES6.addEventListener('click', () => {
        // let node = document.createElement('li');
        // let textNode = document.createTextNode('ES6 list');
        // node.style.fontSize = '30px';
        // node.appendChild(textNode);
        // let list = document.querySelector('#list');
        // list.appendChild(node);
        // header.classList.toggle('blink');

        persons.forEach(function (item, index) {
            html += `<li>${item}</li>`;
        });

        list.innerHTML = html;
    });
});
