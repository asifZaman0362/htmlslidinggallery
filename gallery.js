var images = ["image","image2","image3","image4","image5"];
var path = "res/gallery_img/";
var extension = ".jpg";

var image_elements = [];

window.addEventListener("load", onDocumentLoad);

function onDocumentLoad() {
    for (i = 0; i < images.length; i++) {
        var el = document.createElement("IMG");
        el.classList.add("slide");
        el.id = "s"+i;
        el.style.left = "-" + parseInt(i) + "00vw";
        el.src = getImageFromFile(i);
        el.style.transition = "1s";
        image_elements.push(el);
        document.getElementById("image-container").appendChild(el);
    }
    //document.getElementById("image-cont").style.width = image_elements.length + "00vw";
    setInterval(updateImage, 4000);
}

function getImageFromFile(index) {
    return path + images[index] + extension;
}

var curr = 0;

function updateImage() {
    if (curr == images.length - 1) curr = 0;
    else curr++;
    slideNext(curr);
}

function slideNext(index) {
    image_elements[index].style.transition = "1s";
    image_elements[index].style.left = "0";
    image_elements.forEach(element => {
        if(element != image_elements[index])
        {    
            var left = parseInt(element.style.left.split("vw")[0]);
            if (left == 100) {
                left = (image_elements.length - 2) * -100;
                element.style.transition = "none";
            }
            else left += 100;
            element.style.left = left + "vw";
        }
    });
    // setTimeout(function() {
    //     image_elements[index].style.transition = "none";
    // }, 1050);
}