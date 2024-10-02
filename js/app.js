const linkHome = document.querySelector(".logo-brand");

linkHome.addEventListener('click', () =>{
    window.location ='index.html';
})

function gotoDonw(){
    window.location = 'donwload.html';
}

function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop, 
            behavior: 'smooth' // Animação suave
        });
    }
}

const nav = document.querySelector(".navigator");
const menu = document.querySelector(".responsivy");

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    menu.classList.toggle('active');
});

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.icon');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.classList.remove('rotate');
    } else {
        answer.style.display = 'block';
        icon.classList.add('rotate');
    }
}

function showContent(contentId) {
    document.querySelectorAll('.link').forEach(link => {
        link.classList.remove('active');
    });

    event.target.classList.add('active');

    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(contentId).classList.add('active');
}

function showNavContent(contentId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    event.target.classList.add('active');

    document.querySelectorAll('.nav-content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(contentId).classList.add('active');
}


let sections = document.querySelectorAll('.sec-scroll');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-scroll');
        } else {
            sec.classList.remove('show-scroll');
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.getElementById('statsSection');
    const stats = document.querySelectorAll('.stat h1');
    let statsAnimated = false;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateStats() {
        if (isInViewport(statsSection) && !statsAnimated) {
            stats.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                const duration = 3000;
                const start = 0;
                const increment = target / (duration / 20);

                let current = start;
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        stat.childNodes[0].nodeValue = Math.ceil(current);
                        setTimeout(updateCount, 20);
                    } else {
                        stat.childNodes[0].nodeValue = target;
                    }
                };

                updateCount();
            });
            statsAnimated = true;
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats();
});

// login e sign

const btn_login = document.getElementById("login");
const btn_sign = document.getElementById("sing");
const modal_login = document.querySelector(".modal-login");
const modal_sign = document.querySelector(".modal-sign");
const btn_close = document.querySelector(".close-modal");
const btn_close_sign = document.querySelector(".close-modal-sign");
const newAccount = document.getElementById('newAccount');
const haveAccount = document.getElementById('haveAccount');

btn_login.addEventListener('click', () => {
    modal_login.style.display = 'block';
    document.body.classList.add('disable-scroll');
});

btn_sign.addEventListener('click', () => {
    modal_sign.style.display = 'block';
    document.body.classList.add('disable-scroll');
});

newAccount.addEventListener('click', () => {
    modal_login.style.display = 'none';
    modal_sign.style.display = 'block';
});

haveAccount.addEventListener('click', () => {
    modal_login.style.display = 'block';
    modal_sign.style.display = 'none';
});

btn_close.addEventListener('click', () => {
    modal_login.style.display = 'none';
    document.body.classList.remove('disable-scroll');
});

btn_close_sign.addEventListener('click', () => {
    modal_sign.style.display = 'none';
    document.body.classList.remove('disable-scroll');
});

// validar login

const log_error = document.querySelectorAll('.log_error');
const log_inputs = document.querySelectorAll('.log_input');
const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

function AddError(index){
    log_inputs[index].style.border = '2px solid #cf5656';
    log_error[index].style.display = 'block';
}

function RemovError(index){
    log_inputs[index].style.border = '2px solid #74a4fc';
    log_error[index].style.display = 'none';
}

function validateEmail() {
    if(!regex.test(log_inputs[0].value)){
        AddError(0);
    } else{
        RemovError(0);
    }
}

function validatePass() {
    if(log_inputs[1].value.length < 8){
        AddError(1);
    } else{
        RemovError(1);
    }
}

// validar sign in

const sign_inputs = document.querySelectorAll('.sing_error');
const sign_error = document.querySelectorAll('.error');

function ErrorSignAdd(index){
    sign_inputs[index].style.border = '2px solid #cf5656';
    sign_error[index].style.display = 'block';
}

function ErrorSignRemove(index){
    sign_inputs[index].style.border = '2px solid #74a4fc';
    sign_error[index].style.display = 'none';
}

function namevalidate(){
    if(sign_inputs[0].value.length < 3){
        ErrorSignAdd(0);
    } else{
        ErrorSignRemove(0);
    }
}

function nameBeforevalidate(){
    if(sign_inputs[1].value.length < 4){
        ErrorSignAdd(1);
    } else{
        ErrorSignRemove(1);
    }
}

function emailValidate(){
    if(!regex.test(sign_inputs[2].value)){
        ErrorSignAdd(2);
    } else{
        ErrorSignRemove(2);
    }
}

function passvalidate(){
    if(sign_inputs[3].value.length < 8){
        ErrorSignAdd(3);
    } else{
        ErrorSignRemove(3);
        comparepass();
    }
}

function comparepass(){
    if(sign_inputs[3].value == sign_inputs[4].value && sign_inputs[4].value.length == 8){
        ErrorSignRemove(4);
    } else{
        ErrorSignAdd(4);
    }
}