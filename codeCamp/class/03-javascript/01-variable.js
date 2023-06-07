let name // let 재할당 o, 재선언 x

name = '박소원' // let 재할당 가능 o
name = '집좀' // let 재할당 가능 o

// let name = '퇴근좀' // let 재선언 x -> error : Identifier 'name' has already been declared

console.log(name + ' -> let')

///////////////////////////////////////////////////////////////////////////////////////////////////

const nameAgain = '박소원' // const 재할당, 재선언 둘 다 안됨

// const nameAgain // const 재선언 x -> error : Identifier 'nameAgain' has already been 

nameAgain = '집좀' // const 재할당 x -> error :  Assignment to constant variable.

console.log(nameAgain + ' -> const')