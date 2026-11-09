'use strict';
const triggerElement = document.getElementById("trigger");
const imageElement = document.getElementById("target");
function change() {
    imageElement.src = "img/picB.jpg";
}
function restore() {
    imageElement.src = "img/picA.jpg";
}
triggerElement.addEventListener("mouseenter", change);
triggerElement.addEventListener("mouseleave", restore);