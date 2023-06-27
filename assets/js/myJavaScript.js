let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    console.log("This message will print just after fully loading the website");
    //hide the loader
    loader.style.display = 'none';
});