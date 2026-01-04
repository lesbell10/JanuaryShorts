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

        sidepic.src = "/basket_img/logos/.png";
    }

    /* =======================
   TIER 1 — ALL-TIME GOD TEAMS
======================= */

    if (selectedYear == "1") {
        PG.textContent = "S Curry";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "S O'Neal";
    }

    if (selectedYear == "2") {
        PG.textContent = "S Gilgeous-A";
        SG.textContent = "A Iverson";
        SF.textContent = "G Antetoko.";
        PF.textContent = "K Garnett";
        C.textContent = "N Jokic";

        SF.style.left = "54.5%";
    }

    if (selectedYear == "3") {
        PG.textContent = "L Doncic";
        SG.textContent = "D Wade";
        SF.textContent = "C Anthony";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Duncan";

        SF.style.left = "56%";
        C.style.left = "46%";
    }

    if (selectedYear == "4") {
        PG.textContent = "J Harden";
        SG.textContent = "J Butler";
        SF.textContent = "K Leonard";
        PF.textContent = "T McGrady";
        C.textContent = "V Wemban.";

        SF.style.left = "56.5%";
        C.style.left = "45%";

    }

    if (selectedYear == "5") {
        PG.textContent = "C Paul";
        SG.textContent = "S Nash";
        SF.textContent = "V Carter";
        PF.textContent = "J Tatum";
        C.textContent = "J Embiid";
    }

    sidepic.src = "/basket_img/logos/nba.png";

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