// #btnLogout click -> #modalLogout 의 hidden 클래스 없어짐
// 보이게 된 로그아웃 모달 '아니오' click -> 다시 main.html로 복귀
// 로그아웃 모달에서 '네' click -> 로그아웃되고, 최초화면 index.html 열림

const logoutBtn = document.querySelector('#btnLogout');
const logoutModal = document.querySelector('#modalLogout');
const confirmLogoutBtn = document.querySelector('#confirmLogout')
const cancelLogoutBtn = document.querySelector('#cancelLogout')
const modalBackground = document.querySelector('.modal');


// 로그아웃 버튼 클릭 시 모달창 열림
function openLogout(){
    logoutModal.style.display = 'block';
}
logoutBtn.addEventListener('click', openLogout);


// '네' 버튼 클릭 시 로그아웃 처리
function performLogout(){       // 로그아웃 처리를 수행하는 함수 호출
    // 로그아웃 API를 호출하거나 로컬 스토리지에서 로그인 정보를 삭제
    fetch('/api/logout', {
        method: 'POST',
        // 헤더 정보 설정 등 API 호출 코드는 이전에 제공한 코드 사용
    })
    .then(response => {
        if (response.ok) {
        // 로그아웃이 성공한 경우, 로그인 정보를 삭제하고 홈페이지로 리다이렉트
            clearLoginInfo();
            // 리다이렉트할 URL을 index.html로 변경
            window.location.href = 'index.html';
        } else {
            // 로그아웃이 실패한 경우에 대한 처리 수행
        console.error('로그아웃 실패');
        }
    })
    .catch(error => {
        // 네트워크 오류 등 로그아웃 요청 실패 시에 대한 처리 수행
        console.error('로그아웃 요청 실패:', error);
    });
}
function clearLoginInfo() {
    // 로그인 정보를 저장한 키를 사용하여 로컬 스토리지에서 해당 정보를 삭제
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
}

confirmLogoutBtn.addEventListener('click', performLogout);
  
// '아니오' 버튼 클릭 시 모달창 닫힘
function closeModal(){
    logoutModal.style.display = "none";
}
cancelLogoutBtn.addEventListener('click', closeModal);
  
// 모달 배경 클릭 시 모달창 닫힘
modalBackground.addEventListener('click', function(event) {
  if (event.target === modalBackground) {
    closeModal();
  }
});