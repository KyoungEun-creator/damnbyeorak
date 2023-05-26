// #btnStart click -> #join 회원가입 openJoin
const startBtn = document.querySelector('#btnStart');
const join = document.querySelector('#join');
const HIDDEN_CLASSNAME = 'hidden';

function openJoin(){
    join.classList.remove(HIDDEN_CLASSNAME);
    startBtn.classList.add(HIDDEN_CLASSNAME);
    goLogin.classList.add(HIDDEN_CLASSNAME);
    login.classList.add(HIDDEN_CLASSNAME);
}
startBtn.addEventListener('click',openJoin);

// #goLogin click -> #login 로그인 openLogin
const goLogin = document.querySelector('#goLogin');
const login = document.querySelector('#login');

function openLogin(){
    login.classList.remove(HIDDEN_CLASSNAME);
    startBtn.classList.add(HIDDEN_CLASSNAME);
    goLogin.classList.add(HIDDEN_CLASSNAME);
}
goLogin.addEventListener('click', openLogin);

// #goJoin click -> #join 회원가입 openJoin (로그인 모달 없어짐)
const goJoin = document.querySelector('#goJoin');

goJoin.addEventListener('click', openJoin);

// #btnJoin click -> 회원가입됨 + 최초담벼락 열림
const joinBtn = document.querySelector('#btnJoin');

function openMain(){
    join.classList.add(HIDDEN_CLASSNAME);
    login.classList.add(HIDDEN_CLASSNAME);
    // Main.html 열림
}
joinBtn.addEventListener('click', openMain);

// #btnLogin click -> 최초담벼락 열림
const loginBtn = document.querySelector('#btnLogin');
loginBtn.addEventListener('click', openMain);
