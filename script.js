const show = document.getElementById("show");
const hide = document.getElementById("hide");
const value = document.getElementById("value");

show.addEventListener('click', function(){
    value.style.right = 0;
});

hide.addEventListener('click', function(){
    value.style.right = "-200px";
})