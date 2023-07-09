// #btnStart click -> #login-form에 .hidden 사라짐
const startBtn = document.querySelector('.btnStart');
const loginModal = document.querySelector('#login-form');

function openLogin(){
    loginModal.classList.remove(HIDDEN_CLASSNAME);
    startBtn.classList.add(HIDDEN_CLASSNAME);
    goSignin.innerHTML="계정이 없다면? 회원가입하기";
}
startBtn.addEventListener('click', openLogin);


// #goSignin click -> #signin-form에 .hidden 사라짐
const goSignin = document.querySelector('.goSignin')
const signinModal = document.querySelector('#signin-form');
const HIDDEN_CLASSNAME = 'hidden';


function openSignin(){
    signinModal.classList.remove(HIDDEN_CLASSNAME);
    startBtn.classList.add(HIDDEN_CLASSNAME);
    goSignin.classList.add(HIDDEN_CLASSNAME);
}
goSignin.addEventListener('click', openSignin);



