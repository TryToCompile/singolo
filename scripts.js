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


let click_button_vert = 1;
let click_button_hor = 1;
/////////////////////////////////////// SLIDER BUTTONS ////////////////////////////////

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


