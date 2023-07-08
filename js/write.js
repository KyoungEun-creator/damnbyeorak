// default: (#mark1_on, #mark2_off, #mark3_off) shown
// default: (#mark1_off, #mark2_on, #mark3_on) hidden


// #mark3_off click -> #mark3_on 의 hidden 클래스 없어짐
//                  -> #mark3_off 에 hidden 클래스 생김
//                  -> #mark2_off 에 hidden 클래스 없어짐
//                  -> #mark2_on 에 hidden 클래스 생김

// 결론
// 1. #markX_off click 하면 
// 2. .letterX 보여야지: hidden 클래스 remove
// 3. #markX_off 안 보여야지: hidden 클래스 add
// 4. #markX_on 보여야지: hidden 클래스 remove

// 5. 나머지 두 마크스타일의 _on 은 안 보여야지: hidden 클래스 add
// 6. 나머지 두 마크스타일의 _off 는 보여야지: hidden 클래스 remove

const mark1on = document.querySelector('#mark1_on');
const mark1off = document.querySelector('#mark2_off');
const mark2on = document.querySelector('#mark2_on');
const mark2off = document.querySelector('#mark2_off');
const mark3on = document.querySelector('#mark3_on');
const mark3off = document.querySelector('#mark2_off');

// #mark2_off click -> letter2 hidden 클래스 없어짐 (기존 letter hidden 클래스 생김)
//                  -> #mark2_on 의 hidden 클래스 없어짐
//                  -> #mark2_off 에 hidden 클래스 생김
//                  -> #mark1_off 에 hidden 클래스 없어짐
//                  -> #mark1_on 에 hidden 클래스 생김
mark1off.addEventListener('click', openLetter);
// mark2off.addEventListener('click', openLetter);
// mark3off.addEventListener('click', openLetter);

function openLetter(){
    mark1off
}


