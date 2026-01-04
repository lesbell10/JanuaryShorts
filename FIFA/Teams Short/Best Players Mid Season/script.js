import { Everything } from "/FIFA/FIFAMaster 3.js";

// Position Elements - Team 1
const STL = document.querySelector('.STL');
const STL2 = document.querySelector('.STL2');
const STC = document.querySelector('.STC');
const STC2 = document.querySelector('.STC2');
const STR = document.querySelector('.STR');
const STR2 = document.querySelector('.STR2');
const LW = document.querySelector('.LW');
const LW2 = document.querySelector('.LW2');
const LF = document.querySelector('.LF');
const LF2 = document.querySelector('.LF2');
const AMLC = document.querySelector('.AMLC');
const AMLC2 = document.querySelector('.AMLC2');
const AMC = document.querySelector('.AMC');
const AMC2 = document.querySelector('.AMC2');
const AMRC = document.querySelector('.AMRC');
const AMRC2 = document.querySelector('.AMRC2');
const RF = document.querySelector('.RF');
const RF2 = document.querySelector('.RF2');
const RW = document.querySelector('.RW');
const RW2 = document.querySelector('.RW2');
const WL = document.querySelector('.WL');
const WL2 = document.querySelector('.WL2');
const LCM = document.querySelector('.LCM');
const LCM2 = document.querySelector('.LCM2');
const CM = document.querySelector('.CM');
const CM2 = document.querySelector('.CM2');
const RCM = document.querySelector('.RCM');
const RCM2 = document.querySelector('.RCM2');
const WR = document.querySelector('.WR');
const WR2 = document.querySelector('.WR2');
const DM = document.querySelector('.DM');
const DM2 = document.querySelector('.DM2');
const LB = document.querySelector('.LB');
const LB2 = document.querySelector('.LB2');
const LCB = document.querySelector('.LCB');
const LCB2 = document.querySelector('.LCB2');
const CB = document.querySelector('.CB');
const CB2 = document.querySelector('.CB2');
const RCB = document.querySelector('.RCB');
const RCB2 = document.querySelector('.RCB2');
const RB = document.querySelector('.RB');
const RB2 = document.querySelector('.RB2');
const GK = document.querySelector('.GK');
const GK2 = document.querySelector('.GK2');

// UI Elements
const teamSelector = document.querySelector(".teamSelector");
const sidepic = document.querySelector(".sidepic");
const title = document.querySelector(".title");
const message = document.querySelector(".message");

document.addEventListener("DOMContentLoaded", () => {
    const savedTeam = localStorage.getItem("selectedTeam");
    if (savedTeam) {
        teamSelector.value = savedTeam;
        updatePlayerInfo();
    }
});

teamSelector.addEventListener("change", () => {
    localStorage.setItem("selectedTeam", teamSelector.value);
    updatePlayerInfo();
});

let selectedTeam = 0;

function Three_Mid() {
    if (CM.textContent !== "") {
        LCM.style.left = "21%";
        LCM2.style.left = "21%";
        RCM.style.left = "67%";
        RCM2.style.left = "67%";
        WL.style.top = "48%";
        WL2.style.top = "28%";
        WR.style.top = "48%";
        WR2.style.top = "28%";
    }
}

function Three_Def() {
    if (CB.textContent !== "") {
        LCB.style.left = "19%";
        LCB2.style.left = "19%";
        RCB.style.left = "69%";
        RCB2.style.left = "69%";
    }
}

function setPlayerImage(element, imgElement) {
    if (element.textContent !== "") {
        imgElement.src = "/football_img/players/" + element.textContent + ".webp";
        imgElement.style.border = '1px solid black';
    } else {
        imgElement.src = "";
        imgElement.style.border = 'none';
    }
}

function updatePlayerInfo() {

    document.querySelectorAll('img').forEach(img => {
        img.style.border = 'none';
    });

    // title.innerHTML = " FIFA<br>BEST PLAYERS";
    // title.innerHTML = "";
    document.querySelector("select").style.fontSize = "30px";
    sidepic.style.borderRadius = "10px";
    sidepic.style.border = "none";
    sidepic.style.width = "120px";
    sidepic.style.height = "120px";
    sidepic.style.bottom = "70%";
    sidepic.style.right = "740px";
    // sidepic.style.display = "none";
    selectedTeam = teamSelector.value;
    Everything();
    sidepic.src = "/football_img/logos/fifa.png";
    message.innerHTML = "⬇️ CLICK BELOW FOR FULL VIDEO"
    message.style.display = "none";

/* =======================
   2005-06
======================= */
if (selectedTeam == "1") {
    STC.textContent = "Haaland";
    LW.textContent  = "O Dembele";
    RW.textContent  = "Yamal";
    AMC.textContent = "B Fernandes";

    LCM.textContent = "Kimmich";
    RCM.textContent = "D Rice";

    LB.textContent  = "Balde";
    LCB.textContent = "Gabriel";
    RCB.textContent = "van Dijk";
    RB.textContent  = "Kounde";

    GK.textContent  = "D Raya";

} else if (selectedTeam == "2") {
    STC.textContent = "Mbappe";
    LW.textContent  = "Vini Jr";
    RW.textContent  = "Cherki";
    AMC.textContent = "Bellingham";

    LCM.textContent = "Caicedo";
    RCM.textContent = "Valverde";

    LB.textContent  = "N Mendes";
    LCB.textContent = "Cubarsi";
    RCB.textContent = "Saliba";
    RB.textContent  = "Hakimi";

    GK.textContent  = "Courtois";

} else if (selectedTeam == "3") {
    STC.textContent = "Kane";
    LW.textContent  = "N Williams";
    RW.textContent  = "Saka";
    AMC.textContent = "Palmer";

    LCM.textContent = "Calhanoglu";
    RCM.textContent = "Odegaard";

    LB.textContent  = "A Carreras";
    LCB.textContent = "Huijsen";
    RCB.textContent = "R Dias";
    RB.textContent  = "J Timber";

    GK.textContent  = "Donnarumma";

    LCM.style.left = "23%";
    LB.style.left = "-2%";

} else if (selectedTeam == "4") {
    STC.textContent = "L Martinez";
    LW.textContent  = "Pulisic";
    RW.textContent  = "Salah";
    AMC.textContent = "Wirtz";

    LCM.textContent = "Vitinha";
    RCM.textContent = "De Bruyne";

    LB.textContent  = "Shaw";
    LCB.textContent = "Bastoni";
    RCB.textContent = "Konate";
    RB.textContent  = "R James";

    GK.textContent  = "Alisson";

} else if (selectedTeam == "5") {
    STC.textContent = "F Torres";
    LW.textContent  = "R Leao";
    RW.textContent  = "L Diaz";
    AMC.textContent = "Ni Paz";

    LCM.textContent = "Gravenberch";
    RCM.textContent = "Barella";

    LB.textContent  = "Dimarco";
    LCB.textContent = "van de Ven";
    RCB.textContent = "Upamecano";
    RB.textContent  = "Wesley";

    GK.textContent  = "U Simon";

    LCM.style.left = "21%";
}
    applyImages();
    sidepic.src = "/football_img/logos/fifa.png";
    // substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, " • ");

}

function applyImages() {
    const pairMap = [
        [STL, STL2], [STC, STC2], [STR, STR2], [LW, LW2], [LF, LF2], [AMLC, AMLC2], [AMC, AMC2], [AMRC, AMRC2],
        [RF, RF2], [RW, RW2], [WL, WL2], [LCM, LCM2], [CM, CM2], [RCM, RCM2], [WR, WR2], [DM, DM2],
        [LB, LB2], [LCB, LCB2], [CB, CB2], [RCB, RCB2], [RB, RB2], [GK, GK2]
    ];
    pairMap.forEach(([t, img]) => {
        if (t.textContent.trim() !== "") {
            setPlayerImage(t, img);
        } else {
            img.src = "";
            img.style.border = "none";
        }
    });
}

const container = document.querySelector('.rectangle');
const xPositionDisplay = document.getElementById('x-position');

// Track mouse movement within the .short container
container.addEventListener('mousemove', (event) => {
    const containerRect = container.getBoundingClientRect();

    // Calculate the X-coordinate relative to the container
    const x = event.clientX - containerRect.left;

    // Display the X-coordinate
    xPositionDisplay.innerHTML = `left: ${x}px`;
});

// Clear the X display when the mouse leaves the container
container.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = '';
});

// STL.textContent = "";
// STC.textContent = "";
// STR.textContent = "";
// LW.textContent = "";
// LF.textContent = "";
// AMLC.textContent = "";
// AMC.textContent = "";
// AMRC.textContent = "";
// RF.textContent = "";
// RW.textContent = "";
// WL.textContent = "";
// LCM.textContent = "";
// CM.textContent = "";
// RCM.textContent = "";
// WR.textContent = "";
// DM.textContent = "";
// LB.textContent = "";
// LCB.textContent = "";
// CB.textContent = "";
// RCB.textContent = "";
// RB.textContent = "";
// GK.textContent = "";