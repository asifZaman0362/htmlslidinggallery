var images = ["image","image2","image3","image4","image5"];
var path = "res/gallery_img/";
var extension = ".jpg";

var image_front, image_back = null;

window.addEventListener("load", onDocumentLoad);

function onDocumentLoad() {
    image_back = document.getElementById("s0");
    image_front = document.getElementById("s1");
    image_back.src = getImageFromFile(0);
    setInterval(updateImage, 4000);
}

function getImageFromFile(index) {
    return path + images[index] + extension;
}

var curr = 0;

function updateImage() {
    if (curr == images.length - 1) curr = 0;
    else curr++;
    setImage(curr);
}

function setImage(index) {
    image_front.src = getImageFromFile(index);
    image_front.style.transition = "1s";
    image_front.style.left = "0px";
    setTimeout(() => slideBack(index), 1050);
}

function slideBack(index) {
    image_back.src = getImageFromFile(index);
    image_front.style.transition = "none";
    image_front.style.left = "-1366px";
}