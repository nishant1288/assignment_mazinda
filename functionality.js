var images = ["iphone1.png", "iphone2.jpg", "iphone3.jpg"]
var getDiv = document.querySelector(".image-slider")
var lessThan = document.querySelector(".fa-less-than")
var greaterThan = document.querySelector(".fa-greater-than")

var currentImage = 0;

greaterThan.addEventListener('click', function () {  // To see the next image
    currentImage++;
    if (currentImage > (images.length - 1)) {
        currentImage = 0;
    }

    var newImg = document.createElement('img');
    newImg.src = `images/${images[currentImage]}`
    newImg.className = "mobile-pic"
    getDiv.appendChild(newImg);

    if (getDiv.children.length > 1) {
        getDiv.removeChild(getDiv.children[0])
    }
})

lessThan.addEventListener('click', function () {   // To see the previous image
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    var new2Img = document.createElement('img');
    new2Img.src = `images/${images[currentImage]}`
    new2Img.className = "mobile-pic"
    getDiv.appendChild(new2Img);

    if (getDiv.children.length > 1) {
        getDiv.removeChild(getDiv.children[0])
    }
})

var heart = document.querySelector('.fa-heart'); //For heart animation
heart.addEventListener('click', function() {
    if (heart.className === "fa-regular fa-heart")
    {
        heart.className = "fa-solid fa-heart";
    }
   
    else if (heart.className = "fa-solid fa-heart")
    {
        heart.className = "fa-regular fa-heart"
    }

})