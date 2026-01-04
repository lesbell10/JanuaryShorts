const yearSelector = document.querySelector(".yearSelector")
let selectedYear = 0;
selectedYear = yearSelector.value;

const sidepic = document.querySelector(".sidepic");
const message = document.querySelector(".message")
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const SG3 = document.getElementById("SG3");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const PG3 = document.getElementById("PG3");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const SF3 = document.getElementById("SF3");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const PF3 = document.getElementById("PF3");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");
const title = document.querySelector(".title")

document.addEventListener("DOMContentLoaded", () => {

    PG.style.left = "46%";
    SG.style.left = "34.5%";
    SF.style.left = "57.5%";
    PF.style.left = "36.5%";
    C.style.left = "47%";

    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        yearSelector.value = savedYear;
        selectedYear = savedYear;  // Update selectedPlayer
        updatePlayerInfo();  // Automatically update the player info based on the saved year
    }
});

yearSelector.addEventListener("change", () => {

    title.style.fontSize = "40px"

    PG.style.left = "46%";
    SG.style.left = "34.5%";
    SF.style.left = "57.5%";
    PF.style.left = "36.5%";
    C.style.left = "47%";

    // PG3.style.left = "885px";
    // SG3.style.left ="695px";
    // SF3.style.left  = "58%";
    // PF3.style.left = "765px";
    // C3.style.left = "940px";

    PG2.style.border = "3px solid black";
    SG2.style.border = "3px solid black";
    SF2.style.border = "3px solid black";
    PF2.style.border = "3px solid black"
    C2.style.border = "3px solid black";

    PG3.textContent = "";
    SG3.textContent = "";
    SF3.textContent = "";
    PF3.textContent = "";
    C3.textContent = "";

    PG.style.fontSize = "30px";
    SG.style.fontSize = "30px";
    SF.style.fontSize = "30px";
    PF.style.fontSize = "30px";
    C.style.fontSize = "30px";

    selectedYear = yearSelector.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", yearSelector.value);

    updatePlayerInfo();
});

function updatePlayerInfo() {

    // message.innerHTML = "starting lineups"
    // message.style.display = "none"

    if (selectedYear === "100") {

        title.innerHTML = "<br>SINCE 2000 3 TEAMS";

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";
    }

    if (selectedYear === "1") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2000 3 TEAMS";

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "K Garnett";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";
    }

    if (selectedYear === "2") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2000 3 TEAMS";

        PG.textContent = "J Kidd";
        SG.textContent = "G Payton";
        SF.textContent = "D Nowitzki";
        PF.textContent = "K Malone";
        C.textContent = "A Mourning";

        C.style.left = "44.5%";
        SF.style.left = "55.5%";
    }

    if (selectedYear === "3") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2000 3 TEAMS";

        PG.textContent = "R Allen";
        SG.textContent = "V Carter";
        SF.textContent = "P Pierce";
        PF.textContent = "G Hill";
        C.textContent = "C Webber";

        C.style.left = "46%";
    }

    if (selectedYear === "4") {

        title.innerHTML = "NBA BEST PLAYERS<br>1995–2000 (3 TEAMS)";
    
        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "S Pippen";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";
    }
    
    if (selectedYear === "5") {

        title.innerHTML = "NBA BEST PLAYERS<br>1995–2000 (3 TEAMS)";
    
        PG.textContent = "J Stockton";
        SG.textContent = "G Payton";
        SF.textContent = "G Hill";
        PF.textContent = "K Garnett";
        C.textContent = "D Robinson";

        C.style.left = "44.5%";
    }

    if (selectedYear === "6") {

        title.innerHTML = "NBA BEST PLAYERS<br>1995–2000 (3 TEAMS)";
    
        PG.textContent = "J Kidd";
        SG.textContent = "R Allen";
        SF.textContent = "P Pierce";
        PF.textContent = "C Webber";
        C.textContent = "A Mourning";

        C.style.left = "44.5%";
    }
    

    sidepic.src = "/basket_img/logos/nba.png"

    sidepic.style.width = "275px";
    sidepic.style.right = "650px";

    PG2.src = "/basket_img/players/" + PG.textContent + ".jpg";
    SG2.src = "/basket_img/players/" + SG.textContent + ".jpg";
    SF2.src = "/basket_img/players/" + SF.textContent + ".jpg";
    PF2.src = "/basket_img/players/" + PF.textContent + ".jpg";
    C2.src = "/basket_img/players/" + C.textContent + ".jpg";
}


const xPositionDisplay = document.getElementById('x-position');
const carousel = document.querySelector('.carousel');
const scaleFactor = 0.8;

document.addEventListener('mousemove', (event) => {
    const rect = carousel.getBoundingClientRect();

    // Get mouse X relative to carousel's left edge
    const relativeX = event.clientX - rect.left;

    // Remove the scale effect to get actual unscaled position
    const trueX = Math.round(relativeX / scaleFactor);

    xPositionDisplay.innerHTML = `left: ${trueX + 36}px`;
});

document.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = "";
});

// -------------- STATS ------------------

// PG3.textContent = " PTS";
// SG3.textContent = " PTS";
// SF3.textContent = " PTS";
// PF3.textContent = " PTS";
// C3.textContent = " PTS";