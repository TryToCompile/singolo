const MENU = document.getElementById('menu');
const servicesLink = document.getElementById('servicesLink');
const homeLink = document.getElementById('homeLink');
const portfolioLink = document.getElementById('portfolioLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');
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
const BUTTON_1 = document.querySelector('.button1');
const BUTTON_2 = document.querySelector('.button2');
const BUTTON_3 = document.querySelector('.button3');
const BUTTON_4 = document.querySelector('.button4');
const PHOTO_GRID = document.querySelector('.photo-grid');
const NAVIGATION = document.getElementById('navigation');
const NAVIGATION_DIVS = NAVIGATION.querySelectorAll('.navigation');
const PHOTO_GRID_DIVS = PHOTO_GRID.querySelectorAll('div');
const PHOTO_GRID_IMGS = PHOTO_GRID.querySelectorAll('div img');
const SERVICES_SECTION = document.getElementById('services');
const PORTFOLIO_SECTION = document.getElementById('portfolio');
const ABOUT_SECTION = document.getElementById('about');
const FORM_SECTION = document.getElementById('form');





let click_button_vert = 1;
let click_button_hor = 1;

/////////////////////////// SLIDER ///////////////////////

////////////////////////// LEFT ARR /////////////////////////
let isAnimation = false;
SLIDER_RIGHT_ARR.addEventListener('click', () => {
    if (isAnimation == false) {
        isAnimation = true;
        let active = document.querySelector('.active-slide');
        let passive = document.querySelector('.passive-slide');
        setTimeout(PassiveToRight, 10, active, passive);
        setTimeout(changeSlides, 50, active, passive);
        setTimeout(activeToPassive, 560, active, passive);

    }
});

function activeToPassive(active, passive) {
    active.classList.add('passive-slide');
    passive.classList.remove('passive-slide');
    isAnimation = false;
}

function PassiveToRight(active, passive) {
    passive.style.cssText = 'transform:translate(1020px);';
    passive.classList.remove('passive-slide');
}

function changeSlides(active, passive) {
    active.style.cssText = `transition: transform 500ms;
                                transform:translate(-1020px);`;
    passive.style.cssText = `transition: transform 500ms;`;
    passive.classList.add('active-slide');
    active.classList.remove('active-slide');
}


///////////////////////////////////// RIGHT ARR ///////////////////////

SLIDER_LEFT_ARR.addEventListener('click', () => {
    if (isAnimation == false) {
        isAnimation = true;
        let active = document.querySelector('.active-slide');
        let passive = document.querySelector('.passive-slide');
        setTimeout(PassiveToLeft, 10, active, passive);
        setTimeout(changeSlides2, 50, active, passive);
        setTimeout(activeToPassive2, 560, active, passive);
    }
});

function activeToPassive2(active, passive) {
    active.classList.add('passive-slide');
    passive.classList.remove('passive-slide');
    isAnimation = false;
}

function PassiveToLeft(active, passive) {
    passive.style.cssText = 'transform:translate(-1020px);';
    passive.classList.remove('passive-slide');
}

function changeSlides2(active, passive) {
    active.style.cssText = `transition: transform 500ms;
                                transform:translate(1020px);`;
    passive.style.cssText = `transition: transform 500ms;`;
    passive.classList.add('active-slide');
    active.classList.remove('active-slide');
}



//////////////////////////////////////////////////////////////



/////////////////////////////////////// SLIDER PHONE BUTTONS ////////////////////////////////

BTN_VERT.addEventListener('click', () => {
    if (click_button_vert % 2 == 0) {
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
    if (click_button_hor % 2 == 0) {
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
    if (click_button_hor % 2 == 0) {
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
    if (click_button_vert % 2 == 0) {
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
///////////////////////////////// PORTFOLIO //////////////////////////
const WEB = PHOTO_GRID.querySelectorAll('.web');
const GRAPHIC = PHOTO_GRID.querySelectorAll('.graphic');
const ART = PHOTO_GRID.querySelectorAll('.art');
let childN = PHOTO_GRID.childNodes;
let scirmish = 0;
let temp;
let photogrid = document.getElementById('parent');
let parentchild = photogrid.childNodes;


let web = [];
let tempWeb = [];
WEB.forEach(el => web.push(el.src));
WEB.forEach(el => tempWeb.push(el.src));

console.log(parentchild[1]);
NAVIGATION.addEventListener('click', () => {
    if (event.target != NAVIGATION) {
        NAVIGATION.querySelectorAll('div').forEach(el => el.classList.remove('navigation-active'));
        event.target.classList.add('navigation-active');
        /*if (event.target.classList.contains('button1')) {*/


            PHOTO_GRID.querySelectorAll('div img').forEach(el => el.classList.remove('active-img'));
            let mas = [];
            PHOTO_GRID_IMGS.forEach(el => mas.push(el.src));
            mas.push(mas[0]);
            mas.splice(0, 1);
            mas.forEach((el, i) => PHOTO_GRID_IMGS[i].src = el);
            console.log(PHOTO_GRID.querySelectorAll('.web'));


      /*  } else if (event.target.classList.contains('button2')) {


            PHOTO_GRID.querySelectorAll('div img').forEach(el => el.classList.remove('active-img'));
            let counter;
            let mas = [];
            PHOTO_GRID_IMGS.forEach(el => mas.push(el.src));

            for (let j = 0; j < 4; j++) {
                if (mas[j] != tempWeb[0] || mas[j] != tempWeb[1] || mas[j] != tempWeb[2] || mas[j] != tempWeb[3]) {
                    for (let i = 4; i < 12; i++){
                        
                        if ( mas[j] != tempWeb[0]){
                            temp = mas[j];
                            mas[j] = tempWeb[0];
                            for (let i = 4; i < 12; i++){
                                if (mas[i] == tempWeb[0]){
                                    mas.splice(i,1,temp);
                                    
                                }
                            } 
                        } else if (mas[j] != web[1]){
                                   
                                   } else if (mas[j] != web[2]){
                            
                        } else if (mas[j] != web[3]){
                                   
                                   }
                    }   
                } */
            }
            /*web.push(web[0]);
            console.log(web);
            web.splice(0, 1);
 


            web.forEach((el, i) => PHOTO_GRID_IMGS[i].src = el);*/


        /*} else if (event.target.classList.contains('button3')) {
            PHOTO_GRID.querySelectorAll('div img').forEach(el => el.classList.remove('active-img'));
            let graphic = [];
            let mas = [];
            PHOTO_GRID_IMGS.forEach(el => mas.push(el.src));
            GRAPHIC.forEach(el => graphic.push(el.src));
            console.log(graphic);
            graphic.push(graphic[0]);
            graphic.splice(0, 1);
            graphic.forEach((el, i) => PHOTO_GRID_IMGS[i].src = el);
        } else {
            console.log(4);

        }*/
    
});

////
////
////
/*ТОЧКА ВОЗВРАТА*/ //


PHOTO_GRID.addEventListener('click', () => {
    if (event.target != PHOTO_GRID && event.target != PHOTO_GRID.querySelectorAll('div')) {
        PHOTO_GRID.querySelectorAll('div img').forEach(el => el.classList.remove('active-img'));
        event.target.classList.add('active-img');
    }
});








console.log(PHOTO_GRID);
console.log(PHOTO_GRID.querySelectorAll('div'));


//////////////////////////////////////////////////////////////////////


/*
window.addEventListener('scroll', () => {
    CONTAINER.querySelectorAll('section').forEach(el => 
console.log(el.offsetTop, MENU.scrollTop, el.scrollHeight), Elementr);
});
*/
///////////////// HEADER /////////////////////////
const off = document.getElementById('off');
MENU.addEventListener('click', () => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    if (TOGGLE.classList.contains('header-img-active') || TOGGLE.classList.remove('header-img-passive') ){
        TOGGLE.click();
    }
});

const TOGGLE = document.querySelector('.header-img img');
const MENU_OPACITY = document.querySelector('.menu-opacity');
const TOGGLE_NAV = document.querySelector('nav ul');

console.log(TOGGLE);
TOGGLE.addEventListener('click', () => {
    if (TOGGLE.classList.contains('header-img-active')){
        TOGGLE.classList.add('header-img-passive');
        TOGGLE.classList.remove('header-img-active');
    } else {
        TOGGLE.classList.add('header-img-active');
         TOGGLE.classList.remove('header-img-passive');
    }
   MENU_OPACITY.classList.toggle('active-header');
   TOGGLE_NAV.classList.toggle('active-nav');
   
    
  /* if(MENU_OPACITY.classlist.contains('.active-header')){
        TOGGLE.style.cssText = `transform: rotate(0.25turn);
                                transition: 0.5s ease;`; 
    } else {
         TOGGLE.style.cssText = `transform: rotate(0.75turn);
                                 transition: 0.5s ease;`;
    }*/
});




window.addEventListener('scroll', () => {
    if (window.scrollY < SERVICES_SECTION.offsetTop - 95) {
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        homeLink.classList.add('active');
    } 
    if (window.scrollY > SERVICES_SECTION.offsetTop - 95 ){
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        servicesLink.classList.add('active');   
    } 
    if (window.scrollY > PORTFOLIO_SECTION.offsetTop - 95){
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        portfolioLink.classList.add('active');
    } 
    if (window.scrollY > ABOUT_SECTION.offsetTop - 95){
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        aboutLink.classList.add('active');       
     } 
    if ( (window.scrollY > FORM_SECTION.offsetTop - 95) || (window.scrollY > off.offsetTop - 95) ){
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        contactLink.classList.add('active');   
    }
    
});

///////////////////// FORM /////////////////////////

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
