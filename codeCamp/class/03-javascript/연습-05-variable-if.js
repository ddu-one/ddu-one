/*** 데이터 타입, 연산자 실습 ***/

1 + 1
// 2
1 + '만원'
// '1만원'
1 + '1'
// '11'
1 - '1'
// 0
'코드' + '캠프'
// '코드캠프'
'123' == 123
// true
'123' === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true



/*** 조건문 실습 ***/

if(1+1 === 2){
    console.log('정답입니다.')
} else {
    console.log('틀렸습니다.')
}
// 정답입니다.

if(true){
    console.log('정답입니다.')
} else {
    console.log('틀렸습니다.')
}
// 정답입니다.

if(!true){
    console.log('정답입니다.')
} else {
    console.log('틀렸습니다.')
}
// 틀렸습니다.

if(0){
    console.log('정답입니다.')
} else {
    console.log('틀렸습니다.')
}
// 틀렸습니다.

if(1){
    console.log('정답입니다.')
} else {
    console.log('틀렸습니다.')
}
// 정답입니다.


/*** 조건문 실습2 ***/
const profile = {
    name : '철수',
    age : 12,
    school : '다람쥐초등학교'
}

if(profile.age >= 20){
    console.log('성인입니다.')
} else if(profile.age >= 8 && profile.age <= 19) { // 코드 최적하 하려면 profile.age >= 8 만 써도됨
    console.log('학생입니다.')
}  else if(profile.age <= 7) {
    console.log('어린이입니다.')
}
// VM1714:4 학생입니다.

if(profile.age >= 20){
    console.log('성인입니다.')
} else if(profile.age >= 8) {
    console.log('학생입니다.')
}  else if(profile.age > 0) {
    console.log('어린이입니다.')
} else {
    console.log('잘못입력하셨습니다.') // 에러 핸들링
}
// VM2045:4 학생입니다.
