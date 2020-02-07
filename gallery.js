// Get all image filenames in an array.
// You can make it automatic by using a http server request returning an array using the readdir() function.
var images = ["image","image2","image3","image4","image5"];
var path = "res/gallery_img/"; // Path to directory containing images
var extension = ".jpg"; // The file extension for images

var image_front, image_back = null;

window.addEventListener("load", onDocumentLoad);

function onDocumentLoad() {
    console.log("document loaded!");
    // Find our image view elements
    image_back = document.getElementById("s0");
    image_front = document.getElementById("s1");
    // Set the first image so it's not blank and weird
    image_back.src = getImageFromFile(0);
    // Update the image every 4 seconds (4000 miliseconds)
    setInterval(updateImage, 4000);
}

// Get the indexth image from the array by joining the proper paths
function getImageFromFile(index) {
    return path + images[index] + extension;
}

var curr = 0;

function updateImage() {
    console.log("updating image...");
    if (curr == images.length - 1) curr = 0;
    else curr++;
    setImage(curr);
}

function setImage(index) {
    console.log("setting new image...");
    image_front.src = getImageFromFile(index);
    image_front.style.transition = "1s";
    image_front.style.left = "0px";
    setTimeout(() => slideBack(index), 1050);
}

function slideBack(index) {
    console.log("new image set.");
    image_back.src = getImageFromFile(index);
    image_front.style.transition = "none";
    image_front.style.left = "-1366px";
}