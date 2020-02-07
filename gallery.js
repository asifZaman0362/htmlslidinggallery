var prev = 0;
var toRemove = 0;

setInterval(doRefresh, 4000);

var curr = 0;

function doRefresh() {
    if (curr == 4) curr = 0;
    else curr++;
    getImage(curr); 
}
function getImage(index) {
    if (index == prev) {
        console.log("Image already showing!");
        return;
    } else {
        console.log("Pulling in image "+index+" and removing image "+prev);
        var newImg = document.getElementById("s"+index);
        newImg.style.left = "0px";
        toRemove = prev;
        setTimeout(() => hideImage(toRemove), 1000);
        prev = index;
    }
}
function hideImage(index) {
    console.log("dafuq!");
    document.getElementById("s"+index).classList.remove("slide");
    document.getElementById("s"+index).style.left = "-1366px";
    document.getElementById("s"+index).classList.add("slide");
}