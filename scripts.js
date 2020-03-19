const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const FORM = document.getElementById('forma');
const CONTACT_FORM_NAME_REQUIRED = document.getElementById('req1');
const CONTACT_FORM_EMAIL_REQUIRED = document.getElementById('req2');
const CONTAINER = document.getElementById('container');
const BTN_HOR = document.querySelector('.container-btn-hor');
const BTN_VERT = document.querySelector('.container-btn-vert');
const SCREEN_HOR = document.querySelector('.container-screen-hor');
const SCREEN_VERT = document.querySelector('.container-screen-vert');
const SLIDER_RIGHT_ARR = document.querySelector('.toright');
const SLIDER_LEFT_ARR = document.querySelector('.toleft');
const SLIDE_1 = document.querySelector('.sliderflex'); 
const SLIDE_2 = document.querySelector('.sliderFlex2');

let click_button_vert = 1;
let click_button_hor = 1;

/////////////////////////// SLIDER ///////////////////////

////////////////////////// LEFT ARR /////////////////////////
let isAnimation = false;
SLIDER_LEFT_ARR.addEventListener('click',() => {
        if (isAnimation == false) {
        isAnimation = true;
        let active = document.querySelector('.active-slide');
        let passive = document.querySelector('.passive-slide');
        setTimeout(PassiveToRight,10,active,passive);
        setTimeout(changeSlides,50,active,passive);
        setTimeout(activeToPassive,560,active,passive);
    }
}); 

function activeToPassive (active,passive) {
    active.classList.add('passive-slide');
    passive.classList.remove('passive-slide');
    isAnimation = false;
}

function PassiveToRight (active,passive) {
    passive.style.cssText = `transform:translate(1020px);
                             opacity:0%`;
    passive.classList.remove('passive-slide');
}

function changeSlides (active,passive) {
    active.style.cssText = `transition: transform 500ms;
                                transform:translate(-1020px);`;
        passive.style.cssText = `transition: transform 500ms;
                                 opacity:0%`;
    passive.classList.add('active-slide');
        active.classList.remove('active-slide');
}


///////////////////////////////////// RIGHT ARR ///////////////////////

SLIDER_RIGHT_ARR.addEventListener('click',() => {
        if (isAnimation == false) {
        isAnimation = true;
        let active = document.querySelector('.active-slide');
        let passive = document.querySelector('.passive-slide');
        setTimeout(PassiveToLeft,10,active,passive);
        setTimeout(changeSlides2,50,active,passive);
        setTimeout(activeToPassive2,560,active,passive);
    }
}); 

function activeToPassive2 (active,passive) {
    active.classList.add('passive-slide');
    passive.classList.remove('passive-slide');
    isAnimation = false;
}

function PassiveToLeft (active,passive) {
    passive.style.cssText = 'transform:translate(-1020px);';
    passive.classList.remove('passive-slide');
}

function changeSlides2 (active,passive) {
    active.style.cssText = `transition: transform 500ms;
                                transform:translate(1020px);`;
        passive.style.cssText = `transition: transform 500ms;`;
    passive.classList.add('active-slide');
        active.classList.remove('active-slide');
}



//////////////////////////////////////////////////////////////



/////////////////////////////////////// SLIDER PHONE BUTTONS ////////////////////////////////

BTN_VERT.addEventListener('click', () => {
    if( click_button_vert%2 == 0) {
        SCREEN_VERT.style.cssText = 'opacity:0%';
         BTN_VERT.style.cssText = 'opacity:100%';
        click_button_vert++;
    } else {
        SCREEN_VERT.style.cssText = 'opacity:100%';
        BTN_VERT.style.cssText = 'opacity:0%';
        click_button_vert++;
    }
});


BTN_HOR.addEventListener('click', () => {
    if( click_button_hor%2 == 0) {
        SCREEN_HOR.style.cssText = 'opacity:0%';
        BTN_HOR.style.cssText = 'opacity:100%';
        click_button_hor++;
    } else {
        SCREEN_HOR.style.cssText = 'opacity:100%';
         BTN_HOR.style.cssText = 'opacity:0%';
        click_button_hor++;
    }
});

SCREEN_HOR.addEventListener('click', () => {
    if( click_button_hor % 2 == 0) {
        SCREEN_HOR.style.cssText = 'opacity:0%';
        BTN_HOR.style.cssText = 'opacity:100%';
        click_button_hor++;
    } else {
        SCREEN_HOR.style.cssText = 'opacity:100%';
        BTN_HOR.style.cssText = 'opacity:0%';
        click_button_hor++;
    }
});

SCREEN_VERT.addEventListener('click', () => {
    if( click_button_vert % 2 == 0) {
        SCREEN_VERT.style.cssText = 'opacity:0%';
        BTN_VERT.style.cssText = 'opacity:100%';
        click_button_vert++;
    } else {
        SCREEN_VERT.style.cssText = 'opacity:100%';
        BTN_VERT.style.cssText = 'opacity:0%';
        click_button_vert++;
    }
});
if (SCREEN_VERT.style.opacity === '0%') {
    console.log('lalala');
}



/*
window.addEventListener('scroll', () => {
    CONTAINER.querySelectorAll('section').forEach(el => 
console.log(el.offsetTop, MENU.scrollTop, el.scrollHeight), Elementr);
});
*/


MENU.addEventListener('click', () => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

BUTTON.addEventListener('click', () => {
    let name = CONTACT_FORM_NAME_REQUIRED.validity.valid;
    let email = CONTACT_FORM_EMAIL_REQUIRED.validity.valid;
    if (name == true && email == true) {
        event.preventDefault();
        const subject = document.getElementById('subject').value.toString();
        const description = document.getElementById('description').value.toString();
        document.getElementById('result').innerText = 'The letter was sent';
        document.getElementById('pop-theme').innerText = 'Subject: ' + subject;
        document.getElementById('pop-description').innerText = 'Description: ' + description;
        if (subject == "") {
            document.getElementById('pop-theme').innerText = 'Without subject';
        }

        if (description == "") {
            document.getElementById('pop-description').innerText = 'Without description';
        }
        document.getElementById('message-block').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result').innerText = "";
    document.getElementById('pop-description').innerText = "";
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
    FORM.reset();
});


