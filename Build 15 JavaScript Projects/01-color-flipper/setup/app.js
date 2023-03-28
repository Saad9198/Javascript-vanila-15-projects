const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const radnomNumber = getRandomNumber(); 

    document.body.style.backgroundColor = colors[radnomNumber];
    color.textContent = colors[radnomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
