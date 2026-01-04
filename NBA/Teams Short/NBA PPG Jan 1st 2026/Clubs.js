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
    title.innerHTML = "NBA BEST<br>ON JAN 1ST 2026 ";

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
        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        sidepic.src = "/basket_img/logos/.png";
    }

    // TEAM 1: THE ELITE LEADERS
    if (selectedYear == "1") {
        PG.textContent = "L Doncic";
        SG.textContent = "S Gilgeous-A";
        SF.textContent = "J Brown";
        PF.textContent = "G Antetoko.";
        C.textContent = "N Jokic";

        PG3.textContent = "33.6 PPG";
        SG3.textContent = "32.1 PPG";
        SF3.textContent = "29.5 PPG";
        PF3.textContent = "29.0 PPG";
        C3.textContent = "29.6 PPG";

        SG.style.left = "32.5%";
    }

    // TEAM 2: THE EXPLOSIVE SCORERS
    if (selectedYear == "2") {
        PG.textContent = "T Maxey";
        SG.textContent = "D Mitchell";
        SF.textContent = "A Edwards";
        PF.textContent = "L Markkanen";
        C.textContent = "V Wemba.";

        PG3.textContent = "30.9 PPG";
        SG3.textContent = "29.8 PPG";
        SF3.textContent = "29.1 PPG";
        PF3.textContent = "27.7 PPG";
        C3.textContent = "24.3 PPG";

        C.style.left = "45.5%"
        SF.style.left = "56.5%";
    }

    // TEAM 3: THE VETERAN STARS
    if (selectedYear == "3") {
        PG.textContent = "J Brunson";
        SG.textContent = "C Cunningham";
        SF.textContent = "K Leonard";
        PF.textContent = "K Durant";
        C.textContent = "J Embiid";

        PG3.textContent = "29.2 PPG";
        SG3.textContent = "26.6 PPG";
        SF3.textContent = "28.5 PPG";
        PF3.textContent = "25.4 PPG";
        C3.textContent = "22.6 PPG";

        SG.style.left = "32.5%";
        SG.style.fontSize = "28px";
        SF.style.left = "56.5%";
    }

    // TEAM 4: THE EFFICIENCY UNIT
    if (selectedYear == "4") {
        PG.textContent = "S Curry";
        SG.textContent = "A Reaves";
        SF.textContent = "M Porter Jr";
        PF.textContent = "J Johnson";
        C.textContent = "A Sengun";

        PG3.textContent = "28.7 PPG";
        SG3.textContent = "26.6 PPG";
        SF3.textContent = "25.8 PPG";
        PF3.textContent = "23.8 PPG";
        C3.textContent = "22.6 PPG";

        C.style.left = "46%";
        SF.style.left = "55.5%";
    }

    // TEAM 5: THE PLAYMAKER UNIT
    if (selectedYear == "5") {
        PG.textContent = "J Harden";
        SG.textContent = "D Booker";
        SF.textContent = "D Avdija";
        PF.textContent = "L James";
        C.textContent = "KA Towns";

        PG3.textContent = "25.9 PPG";
        SG3.textContent = "25.7 PPG";
        SF3.textContent = "25.6 PPG";
        PF3.textContent = "20.9 PPG";
        C3.textContent = "21.9 PPG";

        C.style.left = "45.5%";
    }

    sidepic.src = "/basket_img/logos/nba.png";
    sidepic.style.width = "275px";
    sidepic.style.right = "34%";

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