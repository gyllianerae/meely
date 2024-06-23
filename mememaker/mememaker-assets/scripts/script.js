const bodyList = document.getElementById('body-list');
const headList = document.getElementById('head-list');
const eyesList = document.getElementById('eyes-list');
const mouthList = document.getElementById('mouth-list');
const bgList = document.getElementById('bg-list');
const bottomList = document.getElementById('bottom-list');
const topList = document.getElementById('top-list');

var current_body = undefined;
var current_head = undefined;
var current_eyes = undefined;
var current_mouth = undefined;
var current_bg = undefined;
var current_bottom = undefined;
var current_top = undefined;

var selected_body = 0;
var selected_head = 0;
var selected_eyes = 0;
var selected_mouth = 0;
var selected_bg = 1;
var selected_bottom = 0;
var selected_top = 0;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'head':
            current_head = image;
            break;
        case 'eyes':
            current_eyes = image;
            break;
        case 'mouth':
            current_mouth = image;
            break;
        case 'bg':
            current_bg = image;
            break;
        case 'bottom':
            current_bottom = image;
            break;
        case 'top':
            current_top = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'head':
            return selected_head;
        case 'eyes':
            return selected_eyes;
        case 'mouth':
            return selected_mouth;
        case 'bg':
            return selected_bg;
        case 'bottom':
            return selected_bottom;
        case 'top':
            return selected_top;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'head':
            selected_head = idx;
            break;
        case 'eyes':
            selected_eyes = idx;
            break;
        case 'mouth':
            selected_mouth = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
        case 'bottom':
            selected_bottom = idx;
            break;
        case 'top':
            selected_top = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}

AddParts(bodyList, 'body',0, undefined, 'mememaker-assets/img/base.png', true);

AddParts(headList, 'head',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(headList, 'head',1, 'mememaker-assets/img/icons/head/001.png', 'mememaker-assets/img/head/001.png');
AddParts(headList, 'head',2, 'mememaker-assets/img/icons/head/002.png', 'mememaker-assets/img/head/002.png');
AddParts(headList, 'head',3, 'mememaker-assets/img/icons/head/003.png', 'mememaker-assets/img/head/003.png');
AddParts(headList, 'head',4, 'mememaker-assets/img/icons/head/004.png', 'mememaker-assets/img/head/004.png');
AddParts(headList, 'head',5, 'mememaker-assets/img/icons/head/005.png', 'mememaker-assets/img/head/005.png');
AddParts(headList, 'head',6, 'mememaker-assets/img/icons/head/006.png', 'mememaker-assets/img/head/006.png');
AddParts(headList, 'head',7, 'mememaker-assets/img/icons/head/007.png', 'mememaker-assets/img/head/007.png');
AddParts(headList, 'head',8, 'mememaker-assets/img/icons/head/008.png', 'mememaker-assets/img/head/008.png');
AddParts(headList, 'head',9, 'mememaker-assets/img/icons/head/009.png', 'mememaker-assets/img/head/009.png');
AddParts(headList, 'head',10, 'mememaker-assets/img/icons/head/010.png', 'mememaker-assets/img/head/010.png');
AddParts(headList, 'head',11, 'mememaker-assets/img/icons/head/011.png', 'mememaker-assets/img/head/011.png');
AddParts(headList, 'head',12, 'mememaker-assets/img/icons/head/012.png', 'mememaker-assets/img/head/012.png');

AddParts(eyesList, 'eyes',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(eyesList, 'eyes',1, 'mememaker-assets/img/icons/eyes/001.png', 'mememaker-assets/img/eyes/001.png');
// AddParts(eyesList, 'eyes',2, 'mememaker-assets/img/icons/eyes/2.png', 'mememaker-assets/img/eyes/2.png');
// AddParts(eyesList, 'eyes',3, 'mememaker-assets/img/icons/eyes/3.png', 'mememaker-assets/img/eyes/3.png');
// AddParts(eyesList, 'eyes',4, 'mememaker-assets/img/icons/eyes/4.png', 'mememaker-assets/img/eyes/4.png');
// AddParts(eyesList, 'eyes',5, 'mememaker-assets/img/icons/eyes/5.png', 'mememaker-assets/img/eyes/5.png');
// AddParts(eyesList, 'eyes',6, 'mememaker-assets/img/icons/eyes/006.png', 'mememaker-assets/img/eyes/006.png');
// AddParts(eyesList, 'eyes',7, 'mememaker-assets/img/icons/eyes/007.png', 'mememaker-assets/img/eyes/007.png');
// AddParts(eyesList, 'eyes',8, 'mememaker-assets/img/icons/eyes/008.png', 'mememaker-assets/img/eyes/008.png');

// AddParts(mouthList, 'mouth',0, 'mememaker-assets/img/none.png', undefined, true);
// AddParts(mouthList, 'mouth',1, 'mememaker-assets/img/icons/mouth/1.png', 'mememaker-assets/img/mouth/1.png');
// AddParts(mouthList, 'mouth',2, 'mememaker-assets/img/icons/mouth/2.png', 'mememaker-assets/img/mouth/2.png');
// AddParts(mouthList, 'mouth',3, 'mememaker-assets/img/icons/mouth/3.png', 'mememaker-assets/img/mouth/3.png');
// AddParts(mouthList, 'mouth',4, 'mememaker-assets/img/icons/mouth/4.png', 'mememaker-assets/img/mouth/4.png');
// AddParts(mouthList, 'mouth',5, 'mememaker-assets/img/icons/mouth/5.png', 'mememaker-assets/img/mouth/5.png');
// AddParts(mouthList, 'mouth',6, 'mememaker-assets/img/icons/mouth/6.png', 'mememaker-assets/img/mouth/6.png');
// AddParts(mouthList, 'mouth',7, 'mememaker-assets/img/icons/mouth/7.png', 'mememaker-assets/img/mouth/7.png');

AddParts(topList, 'top',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(topList, 'top',1, 'mememaker-assets/img/icons/top/001.png', 'mememaker-assets/img/top/001.png');
AddParts(topList, 'top',2, 'mememaker-assets/img/icons/top/002.png', 'mememaker-assets/img/top/002.png');
AddParts(topList, 'top',3, 'mememaker-assets/img/icons/top/003.png', 'mememaker-assets/img/top/003.png');
AddParts(topList, 'top',4, 'mememaker-assets/img/icons/top/004.png', 'mememaker-assets/img/top/004.png');
AddParts(topList, 'top',5, 'mememaker-assets/img/icons/top/005.png', 'mememaker-assets/img/top/005.png');
AddParts(topList, 'top',6, 'mememaker-assets/img/icons/top/006.png', 'mememaker-assets/img/top/006.png');
AddParts(topList, 'top',7, 'mememaker-assets/img/icons/top/007.png', 'mememaker-assets/img/top/007.png');
AddParts(topList, 'top',8, 'mememaker-assets/img/icons/top/008.png', 'mememaker-assets/img/top/008.png');
AddParts(topList, 'top',9, 'mememaker-assets/img/icons/top/009.png', 'mememaker-assets/img/top/009.png');
AddParts(topList, 'top',10, 'mememaker-assets/img/icons/top/010.png', 'mememaker-assets/img/top/010.png');
AddParts(topList, 'top',11, 'mememaker-assets/img/icons/top/011.png', 'mememaker-assets/img/top/011.png');
AddParts(topList, 'top',12, 'mememaker-assets/img/icons/top/012.png', 'mememaker-assets/img/top/012.png');

AddParts(bottomList, 'bottom', 0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(bottomList, 'bottom', 1, 'mememaker-assets/img/icons/bottom/001.png', 'mememaker-assets/img/bottom/001.png');
AddParts(bottomList, 'bottom', 2, 'mememaker-assets/img/icons/bottom/002.png', 'mememaker-assets/img/bottom/002.png');
AddParts(bottomList, 'bottom', 3, 'mememaker-assets/img/icons/bottom/003.png', 'mememaker-assets/img/bottom/003.png');
AddParts(bottomList, 'bottom', 4, 'mememaker-assets/img/icons/bottom/004.png', 'mememaker-assets/img/bottom/004.png');
AddParts(bottomList, 'bottom', 5, 'mememaker-assets/img/icons/bottom/005.png', 'mememaker-assets/img/bottom/005.png');
AddParts(bottomList, 'bottom', 6, 'mememaker-assets/img/icons/bottom/006.png', 'mememaker-assets/img/bottom/006.png');
AddParts(bottomList, 'bottom', 7, 'mememaker-assets/img/icons/bottom/007.png', 'mememaker-assets/img/bottom/007.png');
AddParts(bottomList, 'bottom', 8, 'mememaker-assets/img/icons/bottom/008.png', 'mememaker-assets/img/bottom/008.png');
AddParts(bottomList, 'bottom', 9, 'mememaker-assets/img/icons/bottom/009.png', 'mememaker-assets/img/bottom/009.png');
AddParts(bottomList, 'bottom', 10, 'mememaker-assets/img/icons/bottom/010.png', 'mememaker-assets/img/bottom/010.png');
// AddParts(bottomList, 'bottom', 11, 'mememaker-assets/img/icons/bottom/11.png', 'mememaker-assets/img/bottom/11.png');

AddParts(bgList, 'bg', 1, 'mememaker-assets/img/icons/background/001.png', 'mememaker-assets/img/background/001.png', true);
AddParts(bgList, 'bg', 2, 'mememaker-assets/img/icons/background/002.png', 'mememaker-assets/img/background/002.png');
AddParts(bgList, 'bg', 3, 'mememaker-assets/img/icons/background/003.png', 'mememaker-assets/img/background/003.png');
AddParts(bgList, 'bg', 4, 'mememaker-assets/img/icons/background/004.png', 'mememaker-assets/img/background/004.png');
AddParts(bgList, 'bg', 5, 'mememaker-assets/img/icons/background/005.png', 'mememaker-assets/img/background/005.png');
AddParts(bgList, 'bg', 6, 'mememaker-assets/img/icons/background/006.png', 'mememaker-assets/img/background/006.png');
AddParts(bgList, 'bg', 7, 'mememaker-assets/img/icons/background/007.png', 'mememaker-assets/img/background/007.png');
AddParts(bgList, 'bg', 8, 'mememaker-assets/img/icons/background/008.png', 'mememaker-assets/img/background/008.png');
AddParts(bgList, 'bg', 9, 'mememaker-assets/img/icons/background/009.png', 'mememaker-assets/img/background/009.png');
AddParts(bgList, 'bg', 10, 'mememaker-assets/img/icons/background/010.png', 'mememaker-assets/img/background/010.png');



const canvas = document.getElementById('mainCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 400, 400 );
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 400, 400 );
    }

    if(current_head != undefined) {
        context.drawImage(current_head, 0, 0, 400, 400 );
    }

    // if(current_mouth != undefined) {
    //     context.drawImage(current_mouth, 0, 0, 400, 400 );
    // }

    if(current_eyes != undefined) {
        context.drawImage(current_eyes, 0, 0, 400, 400 );
    }
    
    if(current_bottom != undefined) {
        context.drawImage(current_bottom, 0, 0, 400, 400 );
    }

    if(current_top != undefined) {
        context.drawImage(current_top, 0, 0, 400, 400 );
    }
}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('head', 0);
    selectParts('eyes', 0);
    // selectParts('mouth', 0);
    selectParts('bg', 1);
    selectParts('bottom', 0);
    selectParts('top', 0);
}

const randomBtn = document.getElementById('random-btn');

randomBtn.onclick = () => {
    const randHead = randRange(0, 12);
    const randEyes = randRange(0, 1);
    // const randMouth = randRange(0, 7);
    const randBg = randRange(1, 10);
    const randbottom = randRange(0, 10);
    const randtop = randRange(0, 12);

    selectParts('head', randHead);
    selectParts('eyes', randEyes);
    // selectParts('mouth', randMouth);
    selectParts('bg', randBg);
    selectParts('bottom', randbottom);
    selectParts('top', randtop);
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'meely.png';
    link.href = canvas.toDataURL()
    link.click();
}

// Define object to store maxTranslateX values for each type
// const maxTranslateXValues = {
//     head: {
//         small: -970,
//         medium: -730,
//         large: -580
//     },
//     eyes: {
//         small: -520,
//         medium: -280,
//         large: -110
//     },
//     mouth: {
//         small: -520,
//         medium: -280,
//         large: -290
//     },
//     bottom: {
//         small: -850,
//         medium: -800,
//         large: -670
//     },
//     top: {
//         small: -580,
//         medium: -560,
//         large: -300
//     },
//     bg: {
//         small: -700,
//         medium: -700,
//         large: -470
//     }
// };

// Function to calculate maxTranslateX value based on the device width and media query conditions
// function calculateMaxTranslateX(type) {
//     const screenWidth = window.innerWidth;
//     let maxTranslateX;

//     if (screenWidth <= 600) {
//         maxTranslateX = maxTranslateXValues[type].small;
//     } else if (screenWidth <= 828) {
//         maxTranslateX = maxTranslateXValues[type].medium;
//     } else {
//         maxTranslateX = maxTranslateXValues[type].large;
//     }

//     return maxTranslateX;
// }

// Function to update maxTranslateX values for right buttons based on screen size
// function updateMaxTranslateX() {
//     // Update maxTranslateX values for head list
//     headRightmaxTranslateX = calculateMaxTranslateX('head');
//     // Update maxTranslateX values for eyes list
//     eyesRightmaxTranslateX = calculateMaxTranslateX('eyes');
//     // Update maxTranslateX values for mouth list
//     mouthRightmaxTranslateX = calculateMaxTranslateX('mouth');
//     // Update maxTranslateX values for bottom list
//     bottomRightmaxTranslateX = calculateMaxTranslateX('bottom');
//     // Update maxTranslateX values for top list
//     topRightmaxTranslateX = calculateMaxTranslateX('top');
//     // Update maxTranslateX values for bg list
//     bgRightmaxTranslateX = calculateMaxTranslateX('bg');
// }

// Call updateMaxTranslateX function on page load
// updateMaxTranslateX();

// Call updateMaxTranslateX function when the window resizes
// window.addEventListener('resize', updateMaxTranslateX);


//head left and right buttons
// const headLeftBtn = document.getElementById('head-left');
// const headLeftmaxTranslateX = 0
// const headLefttranslateStep = -200

// headLeftBtn.onclick = () => {
//     let headLeftcurrentTranslateX = parseInt(headList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     headLeftcurrentTranslateX -= headLefttranslateStep;
//     if (headLeftcurrentTranslateX > headLeftmaxTranslateX) {
//         headLeftcurrentTranslateX = headLeftmaxTranslateX;
//     }
//     headList.style.transform = `translateX(${headLeftcurrentTranslateX}px)`;
// }

// const headRightBtn = document.getElementById('head-right');
// const headRightmaxTranslateX = -670; 
// const headRighttranslateStep = 200; 

// headRightBtn.onclick = () => {
//     let headRightcurrentTranslateX = parseInt(headList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     headRightcurrentTranslateX -= headRighttranslateStep;
//     if (headRightcurrentTranslateX < headRightmaxTranslateX) {
//         headRightcurrentTranslateX = headRightmaxTranslateX;
//     }
//     headList.style.transform = `translateX(${headRightcurrentTranslateX}px)`;
// }

//head left and right buttons
// const eyesLeftBtn = document.getElementById('eyes-left');
// const eyesLeftmaxTranslateX = 0;
// const eyesLefttranslateStep = -200;

// eyesLeftBtn.onclick = () => {
//     let eyesLeftcurrentTranslateX = parseInt(eyesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     eyesLeftcurrentTranslateX -= eyesLefttranslateStep;
//     if (eyesLeftcurrentTranslateX > eyesLeftmaxTranslateX) {
//         eyesLeftcurrentTranslateX = eyesLeftmaxTranslateX;
//     }
//     eyesList.style.transform = `translateX(${eyesLeftcurrentTranslateX}px)`;
// }

// const eyesRightBtn = document.getElementById('eyes-right');
// const eyesRightmaxTranslateX = -220;
// const eyesRighttranslateStep = 200;

// eyesRightBtn.onclick = () => {
//     let eyesRightcurrentTranslateX = parseInt(eyesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     eyesRightcurrentTranslateX -= eyesRighttranslateStep;
//     if (eyesRightcurrentTranslateX < eyesRightmaxTranslateX) {
//         eyesRightcurrentTranslateX = eyesRightmaxTranslateX;
//     }
//     eyesList.style.transform = `translateX(${eyesRightcurrentTranslateX}px)`;
// }


//mouth left and right buttons

// const mouthLeftBtn = document.getElementById('mouth-left');
// const mouthLeftmaxTranslateX = 0;
// const mouthLefttranslateStep = -200;

// mouthLeftBtn.onclick = () => {
//     let mouthLeftcurrentTranslateX = parseInt(mouthList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     mouthLeftcurrentTranslateX -= mouthLefttranslateStep;
//     if (mouthLeftcurrentTranslateX > mouthLeftmaxTranslateX) {
//         mouthLeftcurrentTranslateX = mouthLeftmaxTranslateX;
//     }
//     mouthList.style.transform = `translateX(${mouthLeftcurrentTranslateX}px)`;
// }

// const mouthRightBtn = document.getElementById('mouth-right');
// const mouthRightmaxTranslateX = -220;
// const mouthRighttranslateStep = 200;

// mouthRightBtn.onclick = () => {
//     let mouthRightcurrentTranslateX = parseInt(mouthList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     mouthRightcurrentTranslateX -= mouthRighttranslateStep;
//     if (mouthRightcurrentTranslateX < mouthRightmaxTranslateX) {
//         mouthRightcurrentTranslateX = mouthRightmaxTranslateX;
//     }
//     mouthList.style.transform = `translateX(${mouthRightcurrentTranslateX}px)`;
// }

//bottom left and right buttons

// const bottomLeftBtn = document.getElementById('bottom-left');
// const bottomLeftmaxTranslateX = 0; 
// const bottomLefttranslateStep = -200;

// bottomLeftBtn.onclick = () => {
//     let bottomLeftcurrentTranslateX = parseInt(bottomList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     bottomLeftcurrentTranslateX -= bottomLefttranslateStep;
//     if (bottomLeftcurrentTranslateX > bottomLeftmaxTranslateX) {
//         bottomLeftcurrentTranslateX = bottomLeftmaxTranslateX;
//     }
//     bottomList.style.transform = `translateX(${bottomLeftcurrentTranslateX}px)`;
// }

// const bottomRightBtn = document.getElementById('bottom-right');

// const bottomRighttranslateStep = 200; 

// bottomRightBtn.onclick = () => {
//     let bottomRightcurrentTranslateX = parseInt(bottomList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     bottomRightcurrentTranslateX -= bottomRighttranslateStep;
//     if (bottomRightcurrentTranslateX < bottomRightmaxTranslateX) {
//         bottomRightcurrentTranslateX = bottomRightmaxTranslateX;
//     }
//     bottomList.style.transform = `translateX(${bottomRightcurrentTranslateX}px)`
// }

//top left and right buttons

// const topLeftBtn = document.getElementById('top-left');
// const topLeftmaxTranslateX = 0;
// const topLefttranslateStep = -200; 

// topLeftBtn.onclick = () => {
//     let topLeftcurrentTranslateX = parseInt(topList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     topLeftcurrentTranslateX -= topLefttranslateStep;
//     if (topLeftcurrentTranslateX > topLeftmaxTranslateX) {
//         topLeftcurrentTranslateX = topLeftmaxTranslateX;
//     }
//     topList.style.transform = `translateX(${topLeftcurrentTranslateX}px)`;
// }

// const topRightBtn = document.getElementById('top-right');

// const topRighttranslateStep = 200; 

// topRightBtn.onclick = () => {
//     let topRightcurrentTranslateX = parseInt(topList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     topRightcurrentTranslateX -= topRighttranslateStep;
//     if (topRightcurrentTranslateX < topRightmaxTranslateX) {
//         topRightcurrentTranslateX = topRightmaxTranslateX;
//     }
//     topList.style.transform = `translateX(${topRightcurrentTranslateX}px)`;
// }

//bg left and right buttons

// const bgLeftBtn = document.getElementById('bg-left');
// const bgLeftmaxTranslateX = 0; 
// const bgLefttranslateStep = -200; 

// bgLeftBtn.onclick = () => {
//     let bgLeftcurrentTranslateX = parseInt(bgList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     bgLeftcurrentTranslateX -= bgLefttranslateStep;
//     if (bgLeftcurrentTranslateX > bgLeftmaxTranslateX) {
//         bgLeftcurrentTranslateX = bgLeftmaxTranslateX;
//     }
//     bgList.style.transform = `translateX(${bgLeftcurrentTranslateX}px)`;
// }

// const bgRightBtn = document.getElementById('bg-right');

// const bgRighttranslateStep = 200;

// bgRightBtn.onclick = () => {
//     let bgRightcurrentTranslateX = parseInt(bgList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//     bgRightcurrentTranslateX -= bgRighttranslateStep;
//     if (bgRightcurrentTranslateX < bgRightmaxTranslateX) {
//         bgRightcurrentTranslateX = bgRightmaxTranslateX;
//     }
//     bgList.style.transform = `translateX(${bgRightcurrentTranslateX}px)`;
// }

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-buttons button');
    const selectors = document.querySelectorAll('.selector');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            selectors.forEach(selector => selector.classList.remove('active'));
            document.getElementById(button.dataset.category).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.categories');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');
        });
    });
});

function mousehandler(e) {
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
function disableCtrlKeyCombination(e) {
    var forbiddenKeys = new Array("a", "s", "c", "x","u");
    var key;
    var isCtrl;
    if (window.event) {
        key = window.event.keyCode;
        //IE
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else {
        key = e.which;
        //firefox
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}