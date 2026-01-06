
const imgElement =  document.getElementById("image");

const saturationButton  = document.getElementById("saturation");

function saturationButtonClicked(){
    imgElement.classList.add("saturation");
}

saturationButton.addEventListener("click", saturationButtonClicked);

const blurButton = document.getElementById("blur");

function blurButtonClicked(){
    imgElement.classList.add("blur");
}
blurButton.addEventListener("click", blurButtonClicked);

const somethingButton = document.getElementById("something");

function somethingButtonClicked(){
    imgElement.classList.add("something");
}

somethingButton.addEventListener("click", somethingButtonClicked);



