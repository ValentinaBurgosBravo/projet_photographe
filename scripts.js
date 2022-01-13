//je cible mes elements//
var burgerIconOpen = document.querySelector(".fa-bars");
var burgerIconClose = document.querySelector(".fa-xmark");

// je place //

burgerIconOpen.addEventListener('click',function() {
    burgerIconOpen.setAttribute('class', 'fas fa-times');

});

burgerIconClose.addEventListener('click',function() {
    burgerIconClose.setAttribute('class', 'fa-bars');

});