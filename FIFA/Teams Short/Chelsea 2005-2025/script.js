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
    sidepic.style.bottom = "73%";
    sidepic.style.right = "740px";
    // sidepic.style.display = "none";
    selectedTeam = teamSelector.value;
    Everything();
    sidepic.src = "/football_img/logos/fifa.png";
    message.innerHTML = "⬇️ CLICK BELOW FOR FULL VIDEO"

/* =======================
   2005-06
======================= */
if (selectedTeam == "1") {

    title.innerHTML = "CHELSEA SINCE 2005 #1"

    STC.textContent = "Drogba";
    LW.textContent = "Duff";
    RW.textContent = "Robben";
    AMC.textContent = "Lampard";

    LCM.textContent = "Makelele";
    RCM.textContent = "Essien";

    LB.textContent = "Gallas";
    LCB.textContent = "Carvalho";
    RCB.textContent = "Terry";
    RB.textContent = "Ferreira";

    GK.textContent = "Cech";
}

/* =======================
   2006-07
======================= */
if (selectedTeam == "2") {

    title.innerHTML = "CHELSEA SINCE 2005 #1"

    STC.textContent = "Shevchenko";
    LW.textContent = "J Cole";
    RW.textContent = "Robben";
    AMC.textContent = "Lampard";

    LCM.textContent = "Makelele";
    RCM.textContent = "Essien";

    LB.textContent = "A Cole";
    LCB.textContent = "Carvalho";
    RCB.textContent = "Terry";
    RB.textContent = "Ferreira";

    GK.textContent = "Cech";
}

/* =======================
   2007-08
======================= */
if (selectedTeam == "3") {

    title.innerHTML = "CHELSEA SINCE 2005 #1"

    STC.textContent = "Drogba";
    LW.textContent = "J Cole";
    RW.textContent = "Robben";
    AMC.textContent = "Lampard";

    LCM.textContent = "Essien";
    RCM.textContent = "Ballack";

    LB.textContent = "A Cole";
    LCB.textContent = "Carvalho";
    RCB.textContent = "Terry";
    RB.textContent = "Ferreira";

    GK.textContent = "Cech";
}

/* =======================
   2008-09
======================= */
if (selectedTeam == "4") {

    title.innerHTML = "CHELSEA SINCE 2005 #2"

    STC.textContent = "Drogba";
    LW.textContent = "Malouda";
    RW.textContent = "J Cole";
    AMC.textContent = "Lampard";

    LCM.textContent = "Essien";
    RCM.textContent = "Ballack";

    LB.textContent = "A Cole";
    LCB.textContent = "Carvalho";
    RCB.textContent = "Terry";
    RB.textContent = "Bosingwa";

    GK.textContent = "Cech";
}

/* =======================
   2009-10
======================= */
if (selectedTeam == "5") {

    title.innerHTML = "CHELSEA SINCE 2005 #2"

    STC.textContent = "Drogba";
    LW.textContent = "Malouda";
    RW.textContent = "Anelka";
    AMC.textContent = "Lampard";

    LCM.textContent = "Essien";
    RCM.textContent = "Ballack";

    LB.textContent = "A Cole";
    LCB.textContent = "Carvalho";
    RCB.textContent = "Terry";
    RB.textContent = "Bosingwa";

    GK.textContent = "Cech";
}

/* =======================
   2010-11
======================= */
if (selectedTeam == "6") {

    title.innerHTML = "CHELSEA SINCE 2005 #2"

    STC.textContent = "Drogba";
    LW.textContent = "Malouda";
    RW.textContent = "Anelka";
    AMC.textContent = "Lampard";

    LCM.textContent = "Mikel";
    RCM.textContent = "Essien";

    LB.textContent = "A Cole";
    LCB.textContent = "Alex";
    RCB.textContent = "Terry";
    RB.textContent = "Ivanovic";

    GK.textContent = "Cech";
}

/* =======================
   2011-12
======================= */
if (selectedTeam == "7") {

    title.innerHTML = "CHELSEA SINCE 2005 #3"

    STC.textContent = "Drogba";
    LW.textContent = "Malouda";
    RW.textContent = "Ramires";
    AMC.textContent = "Mata";

    LCM.textContent = "Mikel";
    RCM.textContent = "Lampard";

    LB.textContent = "A Cole";
    LCB.textContent = "D Luiz";
    RCB.textContent = "Terry";
    RB.textContent = "Ivanovic";

    GK.textContent = "Cech";
}

/* =======================
   2012-13
======================= */
if (selectedTeam == "8") {

    title.innerHTML = "CHELSEA SINCE 2005 #3"

    STC.textContent = "Torres";
    LW.textContent = "Hazard";
    RW.textContent = "Ramires";
    AMC.textContent = "Mata";

    LCM.textContent = "Mikel";
    RCM.textContent = "Lampard";

    LB.textContent = "A Cole";
    LCB.textContent = "D Luiz";
    RCB.textContent = "Terry";
    RB.textContent = "Ivanovic";

    GK.textContent = "Cech";
}

/* =======================
   2013-14
======================= */
if (selectedTeam == "9") {

    title.innerHTML = "CHELSEA SINCE 2005 #3"

    STC.textContent = "Torres";
    LW.textContent = "Hazard";
    RW.textContent = "Willian";
    AMC.textContent = "Oscar";

    LCM.textContent = "Matic";
    RCM.textContent = "Lampard";

    LB.textContent = "Azpilicueta";
    LCB.textContent = "G Cahill";
    RCB.textContent = "Terry";
    RB.textContent = "Ivanovic";

    GK.textContent = "Cech";
}

/* =======================
   2014-15
======================= */
if (selectedTeam == "10") {

    title.innerHTML = "CHELSEA SINCE 2005 #4"   

    STC.textContent = "Di Costa";
    LW.textContent = "Hazard";
    RW.textContent = "Willian";
    AMC.textContent = "Oscar";

    LCM.textContent = "Matic";
    RCM.textContent = "Fabregas";

    LB.textContent = "Azpilicueta";
    LCB.textContent = "G Cahill";
    RCB.textContent = "Terry";
    RB.textContent = "Ivanovic";

    GK.textContent = "Courtois";
}

/* =======================
   2015-16
======================= */
if (selectedTeam == "11") {

    title.innerHTML = "CHELSEA SINCE 2005 #4"   

    STC.textContent = "Di Costa";
    LW.textContent = "Hazard";
    RW.textContent = "Willian";
    AMC.textContent = "Fabregas";

    LCM.textContent = "Matic";
    RCM.textContent = "Kovacic";

    LB.textContent = "Azpilicueta";
    LCB.textContent = "G Cahill";
    RCB.textContent = "Terry";
    RB.textContent = "Ivanovic";

    GK.textContent = "Courtois";
}

/* =======================
   2016-17
======================= */
if (selectedTeam == "12") {

    title.innerHTML = "CHELSEA SINCE 2005 #4"

    STC.textContent = "Di Costa";
    LW.textContent = "Hazard";
    RW.textContent = "Pedro";
    AMC.textContent = "Willian";

    LCM.textContent = "Matic";
    RCM.textContent = "Kante";

    LB.textContent = "M Alonso";
    LCB.textContent = "G Cahill";
    RCB.textContent = "Azpilicueta";
    RB.textContent = "V Moses";

    GK.textContent = "Courtois";
}

/* =======================
   2017-18
======================= */
if (selectedTeam == "13") {

    title.innerHTML = "CHELSEA SINCE 2005 #5"   

    STC.textContent = "Morata";
    LW.textContent = "Hazard";
    RW.textContent = "Pedro";
    AMC.textContent = "Willian";

    LCM.textContent = "Kante";
    RCM.textContent = "Fabregas";

    LB.textContent = "M Alonso";
    LCB.textContent = "Rudiger";
    RCB.textContent = "Azpilicueta";
    RB.textContent = "V Moses";

    GK.textContent = "Courtois";
}

/* =======================
   2018-19
======================= */
if (selectedTeam == "14") {

    title.innerHTML = "CHELSEA SINCE 2005 #5"

    STC.textContent = "Giroud";
    LW.textContent = "Hazard";
    RW.textContent = "Pedro";
    AMC.textContent = "Willian";

    LCM.textContent = "Jorginho";
    RCM.textContent = "Kante";

    LB.textContent = "M Alonso";
    LCB.textContent = "D Luiz";
    RCB.textContent = "Rudiger";
    RB.textContent = "Azpilicueta";

    GK.textContent = "Kepa";

    RB.style.left = "83%";
}

/* =======================
   2019-20
======================= */
if (selectedTeam == "15") {

    title.innerHTML = "CHELSEA SINCE 2005 #5"   

    STC.textContent = "T Abraham";
    LW.textContent = "Willian";
    RW.textContent = "Pulisic";
    AMC.textContent = "Mount";

    LCM.textContent = "Jorginho";
    RCM.textContent = "Kante";

    LB.textContent = "M Alonso";
    LCB.textContent = "Christensen";
    RCB.textContent = "Rudiger";
    RB.textContent = "Azpilicueta";

    GK.textContent = "Kepa";

    RB.style.left = "83%";
}

/* =======================
   2020-21
======================= */
if (selectedTeam == "16") {

    title.innerHTML = "CHELSEA SINCE 2005 #6"   

    STC.textContent = "Werner";
    LW.textContent = "Pulisic";
    RW.textContent = "Ziyech";
    AMC.textContent = "Havertz";

    LCM.textContent = "Jorginho";
    RCM.textContent = "Kante";

    LB.textContent = "Chilwell";
    LCB.textContent = "T Silva";
    RCB.textContent = "Rudiger";
    RB.textContent = "R James";

    GK.textContent = "E Mendy";
}

/* =======================
   2021-22
======================= */
if (selectedTeam == "17") {

    title.innerHTML = "CHELSEA SINCE 2005 #6"

    STC.textContent = "Lukaku";
    LW.textContent = "Mount";
    RW.textContent = "Pulisic";
    AMC.textContent = "Havertz";

    LCM.textContent = "Jorginho";
    RCM.textContent = "Kante";

    LB.textContent = "Chilwell";
    LCB.textContent = "T Silva";
    RCB.textContent = "Rudiger";
    RB.textContent = "R James";

    GK.textContent = "E Mendy";
}

/* =======================
   2022-23
======================= */
if (selectedTeam == "18") {

    title.innerHTML = "CHELSEA SINCE 2005 #6"

    STC.textContent = "Havertz";
    LW.textContent = "Mudryk";
    RW.textContent = "Sterling";
    AMC.textContent = "Mount";

    LCM.textContent = "Kante";
    RCM.textContent = "Kovacic";

    LB.textContent = "Chilwell";
    LCB.textContent = "T Silva";
    RCB.textContent = "Koulibaly";
    RB.textContent = "R James";

    GK.textContent = "Kepa";
}

/* =======================
   2023-24
======================= */
if (selectedTeam == "19") {

    title.innerHTML = "CHELSEA SINCE 2005 #7"   

    STC.textContent = "N Jackson";
    LW.textContent = "Sterling";
    RW.textContent = "Palmer";
    AMC.textContent = "Nkunku";

    LCM.textContent = "Caicedo";
    RCM.textContent = "Enzo F";

    LB.textContent = "Cucurella";
    LCB.textContent = "Colwill";
    RCB.textContent = "Disasi";
    RB.textContent = "R James";

    GK.textContent = "R Sanchez";
}

/* =======================
   2024-25
======================= */
if (selectedTeam == "20") {

    title.innerHTML = "CHELSEA SINCE 2005 #7"

    STC.textContent = "N Jackson";
    LW.textContent = "Mudryk";
    RW.textContent = "Palmer";
    AMC.textContent = "Nkunku";

    LCM.textContent = "Caicedo";
    RCM.textContent = "Enzo F";

    LB.textContent = "Cucurella";
    LCB.textContent = "Colwill";
    RCB.textContent = "Disasi";
    RB.textContent = "R James";

    GK.textContent = "R Sanchez";
}


/* =======================
   2025-26
======================= */
if (selectedTeam == "21") {

    title.innerHTML = "CHELSEA SINCE 2005 #7"

    STC.textContent = "J Pedro";
    LW.textContent = "P Neto";
    RW.textContent = "Estevao";
    AMC.textContent = "Palmer";

    LCM.textContent = "Caicedo";
    RCM.textContent = "Enzo F";

    LB.textContent = "Cucurella";
    LCB.textContent = "Colwill";
    RCB.textContent = "Chalobah";
    RB.textContent = "R James";

    GK.textContent = "R Sanchez";
}
    applyImages();
    sidepic.src = "/football_img/logos/chelsea.png";
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