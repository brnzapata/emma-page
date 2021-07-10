let myImage = document.querySelector('img');
//The following changes the image each time it is clicked
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/baby-traveling.jfif'){
        myImage.setAttribute('src','images/disney-world.jfif');
    }else{
        myImage.setAttribute('src','images/baby-traveling.jfif');
    }
}