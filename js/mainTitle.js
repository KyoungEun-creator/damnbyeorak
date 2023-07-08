const signinBtn = document.querySelector('.btnSignin');
const usernameInput = document.querySelector('#username input');
const mainTitle = document.querySelector('#mainTitle');

const HIDDEN_CLASSNAME = "hidden";        
const USERNAME_KEY = "username";

function onSigninSubmit(event){
    event.preventDefault(); 
    const typedUsername = usernameInput.value;  
    localStorage.setItem(USERNAME_KEY, typedUsername);
    paintMainTitle(typedUsername);
}
function paintMainTitle(username){
    mainTitle.innerText = `${username}님의 담벼락`;
    mainTitle.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername != null) {
    signinBtn.addEventListener('submit', onSigninSubmit);
    paintMainTitle(savedUsername);
}