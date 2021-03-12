document.addEventListener('DOMContentLoaded', function() {
    const accordionItemHeaders = document.querySelectorAll('.accordion-item__header');

    accordionItemHeaders.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('active');
            const accordionItemBody = elem.nextElementSibling;
            if (elem.classList.contains('active')) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });
});

//burger menu

$(document).ready(function() {
    $('.burger-menu__button').click(function(event) {
        $('.burger-menu__button,.burger-menu__line, .burger-menu').toggleClass('active');
    })
})