let persons = [
    {name: '철수', age: 17},
    {name: '영희', age: 22},
    {name: '도우너', age: 5},
    {name: '그루트', age: 65},
    {name: '도비', age: 3},
]

for(let count = 0;count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log('성인입니다')
    } else {
        console.log('미성년자입니다')
    }
}
// VM3282:5 미성년자입니다
// VM3282:3 성인입니다
// VM3282:5 미성년자입니다
// VM3282:3 성인입니다
// VM3282:5 미성년자입니다

for(let count = 0;count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log(persons[count].name + '님은 성인입니다')
    } else {
        console.log(persons[count].name + '님은 미성년자입니다')
    }
}
// VM3437:5 철수님은 미성년자입니다
// VM3437:3 영희님은 성인입니다
// VM3437:5 도우너님은 미성년자입니다
// VM3437:3 그루트님은 성인입니다
// VM3437:5 도비님은 미성년자입니다


/*** 퀴즈 ***/
const fruits = [
    {name: 1, title: '레드향'},
    {name: 2, title: '샤인머스켓'},
    {name: 3, title: '산청딸기'},
    {name: 4, title: '한라봉'},
    {name: 5, title: '사과'},
    {name: 6, title: '애플망고'},
    {name: 7, title: '딸기'},
    {name: 8, title: '천혜향'},
    {name: 9, title: '과일선물세트'},
    {name: 10, title: '귤'}
]

for(let ranking = 0; ranking < fruits.length; ranking++){
    console.log(`${fruits[ranking].name} ${fruits[ranking].title}`)
}
// 1 레드향
// 2 샤인머스켓
// 3 산청딸기
// 4 한라봉
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤
