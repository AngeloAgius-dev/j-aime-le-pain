document.querySelector("#close-popup").addEventListener("click", function(){
    document.querySelector(".popup-frame").style.display = "none";
    document.querySelector("html").style.overflowY = "visible";
});