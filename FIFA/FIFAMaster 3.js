export function Everything() {
    clearFields();
    Reset();
}

// first team
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

function clearFields() {

    STL.textContent = "";
    STL2.src = "";
    STC.textContent = "";
    STC2.src = "";
    STR.textContent = "";
    STR2.src = "";
    LW.textContent = "";
    LW2.src = "";
    LF.textContent = "";
    LF2.src = "";
    AMLC.textContent = "";
    AMLC2.src = "";
    AMC.textContent = "";
    AMC2.src = "";
    AMRC.textContent = "";
    AMRC2.src = "";
    RF.textContent = "";
    RF2.src = "";
    RW.textContent = "";
    RW2.src = "";
    WL.textContent = "";
    WL2.src = "";
    LCM.textContent = "";
    LCM2.src = "";
    CM.textContent = "";
    CM2.src = "";
    RCM.textContent = "";
    RCM2.src = "";
    WR.textContent = "";
    WR2.src = "";
    DM.textContent = "";
    DM2.src = "";
    LB.textContent = "";
    LB2.src = "";
    LCB.textContent = "";
    LCB2.src = "";
    CB.textContent = "";
    CB2.src = "";
    RCB.textContent = "";
    RCB2.src = "";
    RB.textContent = "";
    RB2.src = "";
    GK.textContent = "";
    GK2.src = "";
}

// Helper function to apply positioning within a specific rectangle
function applyPositioning(rectangleClass, className, top, left) {
    const rectangle = document.querySelector(`.${rectangleClass}`);
    const element = rectangle.querySelector(`.${className}`);
    if (element) {
        element.style.position = 'absolute';
        element.style.top = top;
        element.style.left = left;
    }
}

// Apply positions for all elements within a given rectangle
function applyPositioningForRectangle(rectangleClass) {
    applyPositioning(rectangleClass, 'STL', '-6.5%', '28%');
    applyPositioning(rectangleClass, 'STL2', '-26.5%', '28%');
    applyPositioning(rectangleClass, 'STC', '-6.5%', '44%');
    applyPositioning(rectangleClass, 'STC2', '-26.5%', '44%');
    applyPositioning(rectangleClass, 'STR', '-6.5%', '60%');
    applyPositioning(rectangleClass, 'STR2', '-26.5%', '60%');
    applyPositioning(rectangleClass, 'LW', '23.5%', '1%');
    applyPositioning(rectangleClass, 'LW2', '3.5%', '1%');
    applyPositioning(rectangleClass, 'LF', '23.5%', '14%');
    applyPositioning(rectangleClass, 'LF2', '3.5%', '14%');
    applyPositioning(rectangleClass, 'AMLC', '23.5%', '25%');
    applyPositioning(rectangleClass, 'AMLC2', '3.5%', '25%');
    applyPositioning(rectangleClass, 'AMC', '23.5%', '44%');
    applyPositioning(rectangleClass, 'AMC2', '3.5%', '44%');
    applyPositioning(rectangleClass, 'AMRC', '23.5%', '60%');
    applyPositioning(rectangleClass, 'AMRC2', '3.5%', '60%');
    applyPositioning(rectangleClass, 'RF', '23.5%', '73%');
    applyPositioning(rectangleClass, 'RF2', '3.5%', '73%');
    applyPositioning(rectangleClass, 'RW', '23.5%', '86%');
    applyPositioning(rectangleClass, 'RW2', '3.5%', '86%');
    applyPositioning(rectangleClass, 'WL', '53%', '-2%');
    applyPositioning(rectangleClass, 'WL2', '33%', '-2%');
    applyPositioning(rectangleClass, 'LCM', '53%', '29%');
    applyPositioning(rectangleClass, 'LCM2', '33%', '29%');
    applyPositioning(rectangleClass, 'CM', '58%', '44%');
    applyPositioning(rectangleClass, 'CM2', '38%', '44%');
    applyPositioning(rectangleClass, 'RCM', '53%', '59%');
    applyPositioning(rectangleClass, 'RCM2', '33%', '59%');
    applyPositioning(rectangleClass, 'WR', '53%', '90%');
    applyPositioning(rectangleClass, 'WR2', '33%', '90%');
    applyPositioning(rectangleClass, 'LWB', '72%', '-1%');
    applyPositioning(rectangleClass, 'LWB2', '54%', '-1%');
    applyPositioning(rectangleClass, 'DM', '69.5%', '44%');
    applyPositioning(rectangleClass, 'DM2', '49.5%', '44%');
    applyPositioning(rectangleClass, 'RWB', '74%', '88%');
    applyPositioning(rectangleClass, 'RWB2', '54%', '88%');
    applyPositioning(rectangleClass, 'LB', '82.5%', '0%');
    applyPositioning(rectangleClass, 'LB2', '62.5%', '0%');
    applyPositioning(rectangleClass, 'LCB', '87.5%', '28%');
    applyPositioning(rectangleClass, 'LCB2', '67.5%', '28%');
    applyPositioning(rectangleClass, 'CB', '87.5%', '44%');
    applyPositioning(rectangleClass, 'CB2', '67.5%', '44%');
    applyPositioning(rectangleClass, 'RCB', '87.5%', '60%');
    applyPositioning(rectangleClass, 'RCB2', '67.5%', '60%');
    applyPositioning(rectangleClass, 'RB', '82.5%', '87%');
    applyPositioning(rectangleClass, 'RB2', '62.5%', '87%');
    applyPositioning(rectangleClass, 'GK', '118%', '44%');
    applyPositioning(rectangleClass, 'GK2', '98%', '44%');
}

// Apply positioning to both rectangle one and two
function Reset() {
    applyPositioningForRectangle('rectangle');
}

/*const xPositionDisplay = document.getElementById('x-position');
const rectangle = document.querySelector('.rectangle');
const scaleFactor = 0.75;

document.addEventListener('mousemove', (event) => {
    const rect = rectangle.getBoundingClientRect();

    // Get mouse X relative to rectangle's left edge
    const relativeX = event.clientX - rect.left;

    // Remove the scale effect to get actual unscaled position
    const trueX = Math.round(relativeX / scaleFactor);

    xPositionDisplay.innerHTML = `left: ${trueX}px`;
});

document.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = "";
});*/