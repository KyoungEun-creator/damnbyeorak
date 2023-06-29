// #btnLogout click -> #modalLogout 의 hidden 클래스 없어짐
// 보이게 된 로그아웃 모달 '아니오' click -> 다시 main.html로 복귀
// 로그아웃 모달에서 '네' click -> 로그아웃되고, 최초화면 index.html 열림

const logoutBtn = document.querySelector('#btnLogout');
const logoutModal = document.querySelector('#modalLogout');
const HIDDEN_CLASSNAME = 'hidden';

function openLogout(){
    logoutModal.classList.remove(HIDDEN_CLASSNAME);
}
logoutBtn.addEventListener('click', openLogout);

// 로그아웃 모달이 아닌 배경화면 click -> 다시 main.html로 복귀
const background = document.querySelector('#bg');

if (logoutModal.classList.contains('hidden')===false) {
    // 보일 때: 배경 클릭하면 -> 다시 안 보이도록(class 추가)
    background.addEventListener('click', function(){
        logoutModal.classList.add('hidden');
    })
} 
