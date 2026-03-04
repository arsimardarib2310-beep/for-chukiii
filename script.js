const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", function() {
    response.textContent = "YEEEHEYYYYY, CANT WAIT TO SEEE YOUUU";
});

noBtn.addEventListener("mouseover", function() {
    const x = Math.floor(Math.random() * 250) - 125;
    const y = Math.floor(Math.random() * 250) - 125;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});