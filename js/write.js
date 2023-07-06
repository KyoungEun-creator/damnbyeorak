// default: (#mark1_on, #mark2_off, #mark3_off) shown
// default: (#mark1_off, #mark2_on, #mark3_on) hidden

// #mark2_off click -> #mark2_on 의 hidden 클래스 없어짐
//                  -> #mark2_off 에 hidden 클래스 생김
//                  -> #mark1_off 에 hidden 클래스 없어짐
//                  -> #mark1_on 에 hidden 클래스 생김


// #mark3_off click -> #mark3_on 의 hidden 클래스 없어짐
//                  -> #mark3_off 에 hidden 클래스 생김
//                  -> #mark2_off 에 hidden 클래스 없어짐
//                  -> #mark2_on 에 hidden 클래스 생김

// 결론
// 1. #markX_off click 하면 
// 2. #markX_off 안 보여야지: hidden 클래스 add
// 3. #markX_on 보여야지: hidden 클래스 remove

// 4. 나머지 두 마크스타일의 _on 은 안 보여야지: hidden 클래스 add
// 5. 나머지 두 마크스타일의 _off 는 보여야지: hidden 클래스 remove

