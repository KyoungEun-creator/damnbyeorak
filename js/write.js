// #btnWrite click -> #join 회원가입 openJoin
const writeBtn = document.querySelector('#btnWrite');

const HIDDEN_CLASSNAME = 'hidden';


function openLetter(){
    join.classList.remove(HIDDEN_CLASSNAME);
    startBtn.classList.add(HIDDEN_CLASSNAME);
    goLogin.classList.add(HIDDEN_CLASSNAME);
    login.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = joinUsername.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    paintMainTitle(typedUsername);
}
writeBtn.addEventListener('click', openLetter);