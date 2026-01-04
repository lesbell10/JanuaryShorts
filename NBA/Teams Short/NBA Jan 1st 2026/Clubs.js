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

    /* =======================
   TIER 1 — ALL-TIME GOD TEAMS
======================= */

if (selectedYear === "1") {
    title.innerHTML += "#1";
    PG.textContent = "T Young";
    SG.textContent = "N Alexander-W";
    SF.textContent = "J Johnson";
    PF.textContent = "K Porzingis";
    C.textContent = "O Okongwu";

    SG.style.left = "32.5%";
    SG.style.fontSize = "27px";
    C.style.left = "44.5%";
    SF.style.left = "56.5%";

    sidepic.src = "/basket_img/logos/atlanta.png";
}

if (selectedYear === "2") {
    title.innerHTML += "#1";
    PG.textContent = "P Pritchard";
    SG.textContent = "D White";
    SF.textContent = "J Brown";
    PF.textContent = "S Hauser";
    C.textContent  = "N Queta";

    sidepic.src = "/basket_img/logos/boston.png";
}

if (selectedYear === "3") {
    title.innerHTML += "#1";
    PG.textContent = "C Thomas";
    SG.textContent = "E Demin";
    SF.textContent = "M Porter Jr";
    PF.textContent = "N Clowney";
    C.textContent  = "N Claxton"

    C.style.left = "46%";
    SF.style.left = "55%";

    sidepic.src = "/basket_img/logos/brooklyn.png";
}

if (selectedYear === "4") {     
    title.innerHTML += "#1";
    PG.textContent = "La Ball";
    SG.textContent = "K Knueppel";
    SF.textContent = "B Miller";
    PF.textContent = "Mil Bridges";
    C.textContent  = "R Kalkbrenner";

    C.style.left = "44%";
    C.style.fontSize = "27px";

    sidepic.src = "/basket_img/logos/charlotte.png";
}

if (selectedYear === "5") { 
    title.innerHTML += "#1";
    PG.textContent = "J Giddey";
    SG.textContent = "C White";
    SF.textContent = "A Dosunmu";
    PF.textContent = "M Buzelis";
    C.textContent  = "N Vucevic";

    C.style.left = "46%";
    SF.style.left = "54%";

    sidepic.src = "/basket_img/logos/chicago.png";
}

if (selectedYear === "6") { 
    title.innerHTML += "#2";
    PG.textContent = "D Garland";
    SG.textContent = "D Mitchell";
    SF.textContent = "D Hunter";
    PF.textContent = "E Mobley";
    C.textContent  = "J Allen";

    sidepic.src = "/basket_img/logos/cleveland.png";
}

if (selectedYear === "7") { 
    title.innerHTML += "#2";
    PG.textContent = "B Williams";   // PG / SG
    SG.textContent = "M Christie";   // SG / SF
    SF.textContent = "C Flagg";      // SF / PF
    PF.textContent = "PJ Washington"; // PF / SF
    C.textContent  = "A Davis";      // PF / C

    sidepic.src = "/basket_img/logos/dallas.png";
}

if (selectedYear === "8") {
    title.innerHTML += "#2";
    PG.textContent = "J Murray";    // PG / SG
    SG.textContent = "T Hardaway Jr";  // SG / SF
    SF.textContent = "C Johnson";   // SF / PF
    PF.textContent = "A Gordon";    // PF / C
    C.textContent  = "N Jokic";     // C / PF

    SG.style.left = "32%";
    SF.style.left = "56%";

    sidepic.src = "/basket_img/logos/denver.png";
}

if (selectedYear === "9") {
    title.innerHTML += "#2";
    PG.textContent = "C Cunningham"; // PG / SG
    SG.textContent = "Au Thompson";   // SG / SF
    SF.textContent = "Du Robinson";   // SF / SG
    PF.textContent = "T Harris";     // PF / SF
    C.textContent  = "J Duren";      // C / PF

    SG.style.left = "32.5%";
    SF.style.left = "53.5%";

    sidepic.src = "/basket_img/logos/detroit.png";
}

if (selectedYear === "10") {
    title.innerHTML += "#2";
    PG.textContent = "S Curry";       // PG / SG
    SG.textContent = "B Podziemski";  // SG / PG
    SF.textContent = "M Moody";       // SG / SF
    PF.textContent = "J Butler";      // SF / PF
    C.textContent  = "J Kuminga";     // PF / C

    SG.style.left = "32.5%";
    C.style.left = "45%";
    SF.style.left = "56%";

    sidepic.src = "/basket_img/logos/golden state.png"
}

if (selectedYear === "11") {
    title.innerHTML += "#3";
    PG.textContent = "R Sheppard";  // PG / SG
    SG.textContent = "Am Thompson";  // SG / SF
    SF.textContent = "K Durant";    // SF / PF
    PF.textContent = "J Smith Jr";  // PF / C
    C.textContent  = "A Sengun";    // C / PF

    SG.style.left = "32%";
    C.style.left = "46%";

    sidepic.src = "/basket_img/logos/houston.png";
}

if (selectedYear === "12") {
    title.innerHTML += "#3";
    PG.textContent = "A Nembhard";  // PG / SG
    SG.textContent = "B Mathurin";  // SG / SF
    SF.textContent = "A Nesmith";   // SF / SG
    PF.textContent  = "P Siakam";    // PF / C
    C.textContent = "O Toppin";    // PF / SF

    SF.style.left = "56%";

    sidepic.src = "/basket_img/logos/indiana.png"
}

if (selectedYear === "13") {
    title.innerHTML += "#3";    
    PG.textContent = "J Harden";        // PG / SG
    SG.textContent = "B Beal";    // SG / SF
    SF.textContent = "K Leonard";       // SF / PF
    PF.textContent = "J Collins";       // PF / C
    C.textContent  = "I Zubac";         // C / PF

    SF.style.left = "56%";

    sidepic.src = "/basket_img/logos/la clippers.png";
}

if (selectedYear === "14") {
    title.innerHTML += "#3";    
    PG.textContent = "L Doncic";        // PG / SG
    SG.textContent = "A Reaves";        // SG / PG
    SF.textContent = "L James";         // SF / PF
    PF.textContent = "R Hachimura";     // PF / SF
    C.textContent  = "D Ayton";         // C / PF

    sidepic.src = "/basket_img/logos/la lakers.png";
}

if (selectedYear === "15") {
    title.innerHTML += "#3";    
    PG.textContent = "J Morant";        // PG / SG
    SG.textContent = "J Wells";       // SG / PG
    SF.textContent = "S Aldama";        // PF / SF
    PF.textContent = "J Jackson Jr";    // PF / C
    C.textContent  = "Z Edey";          // C / PF

    sidepic.src = "/basket_img/logos/memphis.png";
}


if (selectedYear === "16") {
    title.innerHTML += "#4";    
    PG.textContent = "T Herro";         // PG / SG
    SG.textContent = "N Powell";        // SG / SF
    SF.textContent = "An Wiggins";       // SF / SG
    PF.textContent = "J Jaquez Jr";     // SF / PF
    C.textContent  = "B Adebayo";       // C / PF

    C.style.left = "45%";
    SF.style.left = "55%";

    sidepic.src = "/basket_img/logos/miami.png";
}

if (selectedYear === "17") {
    title.innerHTML += "#4";    
    PG.textContent = "R Rollins";       // PG / SG
    SG.textContent = "K Porter Jr";     // PG / SG
    SF.textContent = "K Kuzma";         // SF / PF
    PF.textContent = "G Antetoko."; // PF / C
    C.textContent  = "B Portis";        // C / PF

    sidepic.src = "/basket_img/logos/milwaukee.png";
}

if (selectedYear === "18") {
    title.innerHTML += "#4";    
    PG.textContent = "D DiVincenzo";    // PG / SG
    SG.textContent = "A Edwards";       // SG / SF
    SF.textContent = "J McDaniels";     // SF / PF
    PF.textContent = "J Randle";        // PF / C
    C.textContent  = "N Reid";        // C / PF

    SF.style.left = "54.5%";

    sidepic.src = "/basket_img/logos/minnesota.png"
}


if (selectedYear === "19") {
    title.innerHTML += "#4";    
    PG.textContent = "J Fears";         // PG / SG
    SG.textContent = "J Poole";         // SG / PG
    SF.textContent = "S Bey";    // SF / PF
    PF.textContent = "T Murphy III";    // PF / C
    C.textContent  = "Z Williamson";         // C / PF

    C.style.left = "44.25%";
    C.style.fontSize = "28px";

    sidepic.src = "/basket_img/logos/new orleans.png";
}

if (selectedYear === "20") {
    title.innerHTML += "#4";    
    PG.textContent = "J Brunson";       // PG / SG
    SG.textContent = "Mik Bridges";       // SG / SF
    SF.textContent = "J Hart";          // SG / SF
    PF.textContent = "OG Anunoby";       // SF / PF
    C.textContent  = "KA Towns";         // C / PF

    C.style.left = "46%";

    sidepic.src = "/basket_img/logos/new york.png";
}

if (selectedYear === "21") {
    title.innerHTML += "#5";    
    PG.textContent = "S Gilgeous-A"; // PG / SG
    SG.textContent = "A Mitchell";                // SG / PG
    SF.textContent = "Jal Williams";           // SF / SG
    PF.textContent = "C Holmgren";           // PF / C
    C.textContent  = "I Hartenstein";        // C / PF

    C.style.left = "44%";
    C.style.fontSize = "29px";
    SF.style.left = "54.5%";

    sidepic.src = "/basket_img/logos/oklahoma city.png";
}


if (selectedYear === "22") {
    title.innerHTML += "#5";    
    PG.textContent = "A Black";         // PG / SG
    SG.textContent = "D Bane";          // SG / SF
    SF.textContent = "F Wagner";        // SF / PF
    PF.textContent = "P Banchero";      // PF / SF
    C.textContent  = "W Carter Jr";     // C / PF

    C.style.left = "44.5%";

    sidepic.src = "/basket_img/logos/orlando.png";
}

if (selectedYear === "23") {
    title.innerHTML += "#5";    
    PG.textContent = "T Maxey";     // PG / SG
    SG.textContent = "P George";    // SG / SF
    SF.textContent = "VJ Edgecombe";     // SF / PF
    PF.textContent = "K Oubre Jr";   // PF / C
    C.textContent  = "J Embiid";    // C / PF

    sidepic.src = "/basket_img/logos/philadelphia.png";

    SF.style.left = "52%";
}

if (selectedYear === "24") {
    title.innerHTML += "#5";    
    PG.textContent = "D Booker"; // PG / SG
    SG.textContent = "J Green";    // SG / PG
    SF.textContent = "G Allen";     // SG / SF
    PF.textContent = "D Brooks";    // SF / PF
    C.textContent  = "Ma Williams";  // C / PF

    C.style.left = "44%";

    sidepic.src = "/basket_img/logos/phoenix.png";
}


if (selectedYear === "25") {
    title.innerHTML += "#5";    
    PG.textContent = "J Holiday";    // PG / SG
    SG.textContent = "S Sharpe";    // SG / SF
    SF.textContent = "D Avdija";    // SF / PF
    PF.textContent = "J Grant";     // PF / SF
    C.textContent  = "D Clingan";   // C / PF

    C.style.left = "46%";

    sidepic.src = "/basket_img/logos/portland.png";
}

if (selectedYear === "26") {
    title.innerHTML += "#6";    
    PG.textContent = "R Westbrook"; // PG / SG
    SG.textContent = "Z LaVine";    // SG / SF
    SF.textContent = "D DeRozan";   // SF / SG
    PF.textContent = "K Murray";    // PF / SF
    C.textContent  = "D Sabonis";   // C / PF

    C.style.left = "45.5%";
    SF.style.left = "55.5%";

    sidepic.src = "/basket_img/logos/sacramento.png";
}

if (selectedYear === "27") {
    title.innerHTML += "#56";    
    PG.textContent = "D Fox";          // PG / SG
    SG.textContent = "S Castle";       // SG / PG
    SF.textContent = "D Vassell";      // SG / SF
    PF.textContent = "K Johnson";      // SF / PF
    C.textContent  = "V Wemban.";   // C / PF

    C.style.left = "44.5%";

    sidepic.src = "/basket_img/logos/san antonio.png";
}


if (selectedYear === "28") {
    title.innerHTML += "#6";    
    PG.textContent = "I Quickley";   // PG / SG
    SG.textContent = "RJ Barrett";    // SG / SF
    SF.textContent = "B Ingram";     // SF / PF
    PF.textContent = "S Barnes";     // PF / SF
    C.textContent  = "S Mamu.";     // C / PF

    sidepic.src = "/basket_img/logos/toronto.png";

}

if (selectedYear === "29") {
    title.innerHTML += "#6";    
    PG.textContent = "Ke George";       // PG / SG
    SG.textContent = "A Bailey";       // SG / SF
    SF.textContent = "L Markkanen";    // SF / PF
    PF.textContent = "K Filipowski";   // PF / C
    C.textContent  = "J Nurkic";      // C / PF

    SF.style.left = "53.5%";

    sidepic.src = "/basket_img/logos/utah.png";
}

if (selectedYear === "30") {
    title.innerHTML += "#6";    
    PG.textContent = "B Carrington"; // PG / SG
    SG.textContent = "CJ McCollum";   // SG / PG
    SF.textContent = "Ky George";     // SF / PF
    PF.textContent = "M Bagley III";     // PF / C
    C.textContent  = "A Sarr";       // C / PF

    SG.style.left = "32.5%"
    SF.style.left = "56%";

    sidepic.src = "/basket_img/logos/washington.png";
}

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