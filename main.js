let gallery = document.querySelector(".gallery");
// looping operation
for (let i = 70; i > 0; i--) {
    let img = document.createElement("img");
    img.src = `wall_paper/${i}.jpg`;
    gallery.append(img);
    img.className = `img-${i} imgs`;
}
// Add Sound To Background
let audio = new Audio("1.mp3");
window.onmousedown = function () {
    audio.play();
    console.log("play");
}
window.addEventListener("onkeydown", function () {
    audio.play();
    console.log("play");
});
// Date Not Static
let f_date = document.getElementById("date");
let date = new Date();
let date2 = date.getFullYear();
f_date.innerHTML = `Copyright ${date2} © by beshoy samy.`;